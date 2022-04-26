import React, { useContext, useState, useRef, useEffect } from 'react'

const AppContext = React.createContext()
const loadStorage = () => {
  const addLoadStorage = localStorage.getItem('loadStorage')
  if (addLoadStorage) {
    return true
  } else {
    return false
  }
}

const AppProvider = ({ children }) => {
  const [typeWriter, setTypeWriter] = useState(false)
  const [pageSlider, setPageSlider] = useState(loadStorage())
  const [showNavPage, setShowNavPage] = useState(false)
  const aboutSection = useRef(null)
  const productSection = useRef(null)
  const faqsSection = useRef(null)
  const contactSection = useRef(null)

  useEffect(() => {
    localStorage.setItem('loadStorage', pageSlider)
  }, [pageSlider])

  const handleHidePage = () => {
    setShowNavPage(false)
  }

  const scrollToSection = (ref) => {
    handleHidePage()
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const scrollCouraselBtns = () => {
    let scrollElem = document.querySelector('.image-lists')
    let scrollElemLists = document.querySelectorAll('.btn-slider')

    scrollElemLists[0].classList.add('addColor')
    scrollElem.addEventListener('scroll', () => {
      scrollElemLists.forEach((value, index) => {
        if (scrollElem.scrollLeft < 100) {
          scrollElemLists[0].classList.add('addColor')
          scrollElemLists[index].classList.remove('addColor')
        }
        if (scrollElem.scrollLeft > 100 && scrollElem.scrollLeft < 400) {
          scrollElemLists[1].classList.add('addColor')
          scrollElemLists[index].classList.remove('addColor')
        }
        if (scrollElem.scrollLeft > 400 && scrollElem.scrollLeft < 700) {
          scrollElemLists[2].classList.add('addColor')
          scrollElemLists[index].classList.remove('addColor')
        }
        if (scrollElem.scrollLeft > 700 && scrollElem.scrollLeft < 1100) {
          scrollElemLists[3].classList.add('addColor')
          scrollElemLists[index].classList.remove('addColor')
        }
        if (scrollElem.scrollLeft > 1100 && scrollElem.scrollLeft > 1210) {
          scrollElemLists[4].classList.add('addColor')
          scrollElemLists[3].classList.remove('addColor')
        }
      })
    })
  }

  const handleScrollClicks = () => {
    let scrollElem = document.querySelector('.image-lists')
    let scrollElemLists = document.querySelectorAll('.btn-slider')
    scrollElemLists.forEach((value, index) => {
      value.addEventListener('click', () => {
        if (index === 0) {
          scrollElem.scrollTo({
            left: 0,
            behavior: 'smooth',
          })
        }
        if (index === 1) {
          scrollElem.scrollTo({
            left: 300,
            behavior: 'smooth',
          })
        }
        if (index === 2) {
          scrollElem.scrollTo({
            left: 600,
            behavior: 'smooth',
          })
        }
        if (index === 3) {
          scrollElem.scrollTo({
            left: 900,
            behavior: 'smooth',
          })
        }
        if (index === 4) {
          scrollElem.scrollTo({
            left: 1300,
            behavior: 'smooth',
          })
        }
      })
    })
  }

  const shareUrl = () => {
    window.navigator
      .share({
        url: window.location,
        title: 'ShopWithEhi',
        text: 'Share our page',
      })
      .then(() => console.log('success'))
      .catch(() => 'Error')
  }

  return (
    <AppContext.Provider
      value={{
        typeWriter,
        setTypeWriter,
        pageSlider,
        setPageSlider,
        showNavPage,
        setShowNavPage,
        aboutSection,
        productSection,
        faqsSection,
        contactSection,
        scrollToSection,
        handleHidePage,
        scrollCouraselBtns,
        handleScrollClicks,
        shareUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
