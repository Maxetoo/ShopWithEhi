import React, { useEffect } from 'react'
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { gsap } from 'gsap'

const Contact = () => {
  // useEffect(() => {
  //   gsap.to('.faqs-header', {
  //     scrollTrigger: {
  //       trigger: '.faqs-header',
  //       start: 'top bottom',
  //     },
  //     opacity: 1,
  //     transition: 'ease 0.5s',
  //     duration: 1.5,
  //   })

  useEffect(() => {
    const contactTl = gsap.timeline()
    contactTl
      .to('.contact-header', {
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top bottom',
        },
        opacity: 1,
        transition: 'ease 0.5s',
        duration: 1.5,
      })
      .to('.contact-texts', {
        scrollTrigger: {
          trigger: '.contact-texts',
          start: 'top center',
        },
        opacity: 1,
        transition: 'ease 0.5s',
        duration: 1,
      })
  }, [])
  return (
    <div className='contact-section-container'>
      <div className='contact-content'>
        <p className='contact-header'>Contact</p>
        <p className='contact-texts'>
          Want to get in touch? We'll really love to hear from you. Here's how
          you can reach and support us
        </p>
      </div>
      <div className='contact-container'>
        <a href='tel:08103124986'>
          <div className='contact-socials'>
            <span className='contact-icon'>
              <FaPhoneAlt />
            </span>
            <span className='contact-wordings'>08103124986</span>
          </div>
        </a>
        <a href='mailto: onuchegracee@gmail.com'>
          <div className='contact-socials'>
            <span className='contact-icon'>
              <MdEmail />
            </span>
            <span className='contact-wordings'>Email</span>
          </div>
        </a>

        <a href='https://www.facebook.com/ehi.grace.33'>
          <div className='contact-socials'>
            <span className='contact-icon'>
              <BsFacebook />
            </span>
            <span className='contact-wordings'>Facebook</span>
          </div>
        </a>
        <a href='https://www.instagram.com/invites/contact/?i=1gnzd3074t14y&utm_content=nvkqubx'>
          <div className='contact-socials'>
            <span className='contact-icon'>
              <BsInstagram />
            </span>
            <span className='contact-wordings'>Instagram</span>
          </div>
        </a>
      </div>
      <div className='page-line'></div>
    </div>
  )
}

export default Contact
