import React, { useEffect } from 'react'
import { ImageData } from '../../../Assets/Images/Image-data'
import { gsap } from 'gsap'
const About = ({ aboutSection }) => {
  //USEEFFECT FOR SCROLL BEHAVIOUR
  useEffect(() => {
    const budgetTl = gsap.timeline()
    budgetTl
      .to('.budget-content-header', {
        scrollTrigger: {
          trigger: '.budget-content-header',
          start: 'top bottom',
        },
        opacity: 1,
        transition: 'ease 0.5s',
        duration: 1.5,
      })
      .to('.budget-content-texts', {
        scrollTrigger: {
          trigger: '.budget-content-texts',
          start: 'top center',
        },
        opacity: 1,
        duration: 3,
        transition: 'ease 0.5s',
      })
  }, [])
  return (
    <article className='main-home-contents' ref={aboutSection}>
      <div className='home-page-content'>
        <p className='home-page-header'>About</p>
        <p className='home-page-texts'>
          ShopWithEhi is a clothing brand where all kinds of clothing are being
          sold from thrift wears to ready-to-wear. Clothings such as vintage
          shirts, gowns, shoes and bags. We everything fashion and also place
          our customers at very high esteem for their satisfaction in our
          priority.
        </p>
        <div className='page-line'></div>
      </div>
      {/* <img
        src={ImageData.sixth}
        alt='clothes and bags'
        className='budget-img'
      />
      <div className='budget-content-container'>
        <p className='budget-content-header'>Got Low Budget?</p>
        <p className='budget-content-texts'>
          You don't have to worry about that cause we offer the best affordable
          vintage clothing that'll fit your prefrence. We believe you don't need
          much to look good. Come shopwithehi with shikini money.
        </p>
        <div className='page-line'></div>
      </div> */}
    </article>
  )
}

export default About
