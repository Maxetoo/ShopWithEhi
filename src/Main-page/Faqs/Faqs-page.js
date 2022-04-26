import React, { useState, useEffect } from 'react'
import './Faqs-page.css'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { gsap } from 'gsap'

const FaqsPage = ({ question, answer }) => {
  const [isExpanded, notExpanded] = useState(false)
  useEffect(() => {
    gsap.to('.faqs-header', {
      scrollTrigger: {
        trigger: '.faqs-header',
        start: 'top bottom',
      },
      opacity: 1,
      transition: 'ease 0.5s',
      duration: 1,
    })
  }, [])
  return (
    <div className='faqs-item' onClick={() => notExpanded(!isExpanded)}>
      <div className='faqs-display'>
        <span className='faqs-caption'>{question}</span>
        <span className='faqs-icon' onClick={() => notExpanded(!isExpanded)}>
          {isExpanded ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>
      {isExpanded && <div className='faqs-details'>{answer}</div>}
    </div>
  )
}

export default FaqsPage
