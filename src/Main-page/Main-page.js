import React, { useState, useEffect } from 'react'
import './Main-page.css'
import { HiMenuAlt3 } from 'react-icons/hi'
import { ImageData } from '../Assets/Images/Image-data'
import NavPage from './Nav-page/Navpage'
import { useGlobalContext } from '../context'
import { FaqsData } from './Faqs/Faqs-data'
import FaqsPage from './Faqs/Faqs-page'

const Mainpage = () => {
  const { showNavPage, setShowNavPage } = useGlobalContext()
  const [showNavBar, setShowNavBar] = useState(true)

  useEffect(() => {
    let prevScroll = window.pageYOffset
    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset
      if (prevScroll > currentScroll) {
        setShowNavBar(true)
      } else {
        setShowNavBar(false)
      }
    })
  }, [showNavBar])

  const handleShowNavPage = () => {
    setShowNavPage(true)
  }
  return (
    <section className='main-page-section'>
      {showNavPage && <NavPage />}
      <article className='about-section'>
        {showNavBar && (
          <article className='main-header'>
            <div className='main-name'>SHOPWITHEHI</div>
            <div className='menu-bar' onClick={handleShowNavPage}>
              <HiMenuAlt3 />
            </div>
          </article>
        )}

        <article className='main-home-page'>
          <img src={ImageData.fifth} alt='vintage clothes' />
          <div className='home-page-content'>
            <p className='home-page-header'>About</p>
            <p className='home-page-texts'>
              ShopWithEhi is a clothing brand where all kinds of clothing are
              being sold from thrift wears to ready-to-wear. Clothings such as
              vintage shirts, gowns, shoes and bags. We everything fashion and
              also place our customers at very high esteem for their
              satisfaction in our priority.
            </p>
            <div className='page-line'></div>
            <div className='budget-content-container'>
              <p className='budget-content-header'>Got Low Budget?</p>
              <p className='budget-content-texts'>
                You don't have to worry about that cause we offer the best
                affordable clothes that'll fit your prefrence with shikini money
              </p>
            </div>
          </div>
        </article>
        <article className='products-section'>
          <div className='products-content'>
            <p className='products-header'>Products</p>
            <div className='products-img-container'>
              <ul className='image-lists'>
                <li className='image-container'></li>
                <li className='image-container'></li>
                <li className='image-container'></li>
                <li className='image-container'></li>
                <li className='image-container'></li>
              </ul>
            </div>
          </div>
        </article>
        <article className='faqs-section'>
          <div className='faqs-content'>
            <p className='faqs-header'>FAQs</p>
          </div>
          <div className='faqs-container'>
            {FaqsData.map((value) => {
              return <FaqsPage {...value} key={value.id} />
            })}
          </div>
        </article>
      </article>
    </section>
  )
}

export default Mainpage
