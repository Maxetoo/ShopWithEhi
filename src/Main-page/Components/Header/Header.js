import React from 'react'
import { useGlobalContext } from '../../../context'
import { HiMenuAlt3 } from 'react-icons/hi'

const Header = ({ handleShowNavPage }) => {
  const {
    scrollToSection,
    aboutSection,
    productSection,
    faqsSection,
    contactSection,
  } = useGlobalContext()
  return (
    <article className='main-header'>
      <div className='main-name'>SHOPWITHEHI</div>
      <div className='menu-lists'>
        <ul className='menu-lists-ul'>
          <li
            className='menu-list-li'
            onClick={() => scrollToSection(aboutSection)}
          >
            About
          </li>
          <li
            className='menu-list-li'
            onClick={() => scrollToSection(productSection)}
          >
            Products
          </li>
          <li
            className='menu-list-li'
            onClick={() => scrollToSection(faqsSection)}
          >
            FAQs
          </li>
          <li
            className='menu-list-li'
            onClick={() => scrollToSection(contactSection)}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className='menu-bar' onClick={handleShowNavPage}>
        <HiMenuAlt3 />
      </div>
    </article>
  )
}

export default Header
