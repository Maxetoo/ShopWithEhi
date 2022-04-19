import React, { useEffect } from 'react'
import './Navpage.css'
import { FaTimes } from 'react-icons/fa'
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs'
import { useGlobalContext } from '../../context'
import { gsap } from 'gsap'

const Navpage = () => {
  const { setShowNavPage } = useGlobalContext()
  const handleHidePage = () => {
    setShowNavPage(false)
  }

  useEffect(() => {
    const listTl = gsap.timeline()
    listTl
      .from('.nav-title', {
        y: 10,
        opacity: 0,
      })
      .from('.nav-list', {
        opacity: 0,
        x: 10,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back(2)',
      })
      .from('.social-list', {
        opacity: 0,
        y: 10,
        duration: 0.3,
        stagger: 0.1,
      })
  }, [])

  return (
    <div className='nav-page-section'>
      <div className='close-btn-cont'>
        <div className='close-btn' onClick={handleHidePage}>
          <FaTimes />
        </div>
      </div>
      <div className='nav-options'>
        <p className='nav-title'>Menu</p>
        <ul className='nav-lists-container'>
          <li className='nav-list'>About</li>
          <li className='nav-list'>Products</li>
          <li className='nav-list'>FAQs</li>
          <li className='nav-list'>Contact</li>
        </ul>
        <div className='socials'>
          <ul className='social-media-lists'>
            <li className='social-list'>
              <a href=''>
                <BsWhatsapp />
              </a>
            </li>
            <li className='social-list'>
              <a href=''>
                <BsInstagram />
              </a>
            </li>
            <li className='social-list'>
              <a href=''>
                <BsFacebook />
              </a>
            </li>
            <li className='social-list'>
              <a href=''></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navpage
