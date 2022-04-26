import React, { useEffect } from 'react'
import './Pageslider.css'
import { gsap } from 'gsap'
import { useGlobalContext } from '../context'

const Pageslider = () => {
  const { typeWriter, setPageSlider } = useGlobalContext()
  useEffect(() => {
    const pageSlide = gsap.timeline()
    if (typeWriter) {
      pageSlide
        .to('.page-slider-section', {
          height: '100%',
          duration: 1,
          stagger: 0.5,
        })
        .to('.page-slider-content', {
          opacity: 1,
          y: 10,
        })
        .to('.page-slider-left, .page-slider-right', {
          width: '50vw',
          opacity: 1,
          duration: 1,
          delay: 1,
        })
        .add(() => setPageSlider(true))
    }
  }, [])
  return (
    <div className='page-slider-section'>
      <div className='page-slider-content'>
        <div className='slider-content-border'>
          <div className='slider-content-texts'>Ehi Got You!</div>
        </div>
      </div>
      <div className='page-slider-container'>
        <div className='page-slider-left'></div>
        <div className='page-slider-right'></div>
      </div>
    </div>
  )
}

export default Pageslider
