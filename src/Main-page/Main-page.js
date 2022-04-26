import React, { useState, useEffect } from 'react'
import './Main-page.css'
import NavPage from './Nav-page/Navpage'
import { useGlobalContext } from '../context'
import { ImageData } from '../Assets/Images/Image-data'
import { FaqsData } from './Faqs/Faqs-data'
import StickyBar from './Components/StickyBar/StickyBar'
import FaqsPage from './Faqs/Faqs-page'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Mainpage = () => {
  const {
    showNavPage,
    setShowNavPage,
    aboutSection,
    productSection,
    faqsSection,
    contactSection,
    pageSlider,
    scrollCouraselBtns,
    handleScrollClicks,
  } = useGlobalContext()
  const [lastScroll, setLastScroll] = useState(0)
  const [showNavBar, setShowNavBar] = useState(true)
  const [currentSection, setCurrentSection] = useState('A')
  const [showStickyBar, setShowStickyBar] = useState(true)
  //USEEFFECT TO TOGGLE SHOW AND HIDE HEADER MENU

  useEffect(() => {
    const pageScroll = window.addEventListener('scroll', () => {
      setLastScroll(window.pageYOffset)
      if (window.scrollY > 200) {
        if (window.scrollY > lastScroll) {
          setShowNavBar(false)
        } else {
          setShowNavBar(true)
        }
      } else {
        setShowNavBar(true)
      }
    })
    return () => window.addEventListener('scroll', pageScroll)
  }, [lastScroll])

  // USEEFFECT TO CHANGE THE TEXT INDICATING SECTION ON THE STICKY BAR

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= aboutSection.current.offsetTop - 400) {
        setCurrentSection('A')
      }
      if (window.scrollY >= productSection.current.offsetTop - 400) {
        setCurrentSection('P')
      }
      if (window.scrollY >= faqsSection.current.offsetTop - 400) {
        setCurrentSection('F')
      }
      if (window.scrollY >= contactSection.current.offsetTop - 400) {
        setCurrentSection('C')
        setShowStickyBar(false)
      } else {
        setShowStickyBar(true)
      }
    })
  }, [showStickyBar])

  // FUNCTION TO TOGGLE SHOW NAV PAGE

  const handleShowNavPage = () => {
    setShowNavPage(true)
  }

  // USEEFFECT TO ANIMATE ELEMENTS WHEN PAGE LOADS

  useEffect(() => {
    const startingLoad = gsap.timeline()
    if (pageSlider) {
      startingLoad
        .from('.first-imageLoad', {
          opacity: 0,
          y: 20,
          duration: 1,
        })
        .from('.home-page-header', {
          opacity: 0,
          y: 20,
          delay: -0.5,
        })
        .from('.home-page-texts', {
          y: 20,
          opacity: 0,
        })
        .from('.page-line', {
          opacity: 0,
          y: 10,
        })
    }
  }, [pageSlider])

  //USEEFECT TO CALL THE FUNCTION TO SHOW ACTIVE ELEMENTS ON COURASEL BTNS
  useEffect(() => {
    scrollCouraselBtns()
  }, [])

  // USEEFFECT TO SCROLL THROUGH IMAGES ON COURASEL BTN ON CLICK EVENT
  useEffect(() => {
    handleScrollClicks()
  }, [])

  return (
    <section className='main-page-section'>
      {showStickyBar && <StickyBar currentSection={currentSection} />}
      {showNavPage && <NavPage />}
      <article className='about-section'>
        {showNavBar && <Header handleShowNavPage={handleShowNavPage} />}

        <article className='main-home-page'>
          <img
            src={ImageData.fifth}
            alt='vintage clothes'
            className='first-imageLoad'
          />
          {/* ABOUT SECTION  */}
          <About aboutSection={aboutSection} />
        </article>
        {/* PRODUCTS SECTION  */}
        <Products productSection={productSection} />
        {/* FAQS SECTION  */}
        <article className='faqs-section' ref={faqsSection}>
          <div className='faqs-content'>
            <p className='faqs-header'>FAQs</p>
          </div>
          <div className='faqs-container'>
            {FaqsData.map((value) => {
              return <FaqsPage {...value} key={value.id} />
            })}
          </div>
        </article>
        {/* CONTACT SECTION */}
        <article className='contact-section' ref={contactSection}>
          <Contact />
        </article>
      </article>
    </section>
  )
}

export default Mainpage
