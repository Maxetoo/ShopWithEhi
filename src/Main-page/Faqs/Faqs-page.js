import React, { useState } from 'react'
import './Faqs-page.css'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

const FaqsPage = ({ question, answer }) => {
  const [isExpanded, notExpanded] = useState(false)
  return (
    <div className='faqs-item'>
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
