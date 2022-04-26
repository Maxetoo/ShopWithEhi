import React from 'react'
import { BsShareFill } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useGlobalContext } from '../../../context'
const StickyBar = ({ currentSection }) => {
  const { shareUrl } = useGlobalContext()
  return (
    <div className='sticky-bar'>
      <p className='bar-tag'>{currentSection}</p>
      <div className='media-lists'>
        <ul className='medial-list-ul'>
          <li className='media-list-item'>
            <a href='https://wa.me/qr/FXN7TRBLUUZXC1'>
              <IoLogoWhatsapp />
            </a>
          </li>
          <li className='media-list-item' onClick={shareUrl}>
            <BsShareFill />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StickyBar
