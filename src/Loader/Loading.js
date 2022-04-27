import React, { useState, useEffect } from 'react'
import './Loading.css'
import { gsap } from 'gsap'
import { useGlobalContext } from '../context'

const Loading = () => {
  const { setHasLoaded, hasLoaded } = useGlobalContext()
  const [loadingTimer, setLoadingTimer] = useState(0)
  const [fadeBg, setFadeBg] = useState(false)

  useEffect(() => {
    if (loadingTimer < 100) {
      setTimeout(() => {
        setLoadingTimer(loadingTimer + 20)
      }, 800)
    } else {
      setFadeBg(true)
      setTimeout(() => {
        setHasLoaded(true)
      }, 750)
    }
  }, [loadingTimer, hasLoaded])

  useEffect(() => {
    const loadingTl = gsap.timeline()
    loadingTl.from('.loader-texts', {
      opacity: 0,
      y: 30,
      duration: 1.3,
      stagger: 0.3,
      ease: 'ease-out',
    })
  }, [])

  useEffect(() => {
    if (fadeBg) {
      gsap.to('.loader-section', {
        opacity: 0,
      })
    }
  }, [fadeBg])
  return (
    <div className='loader-section'>
      <div className='loader-texts-cont'>
        <span className='loader-texts'>Shop</span>
        <span className='loader-texts'>With</span>
        <span className='loader-texts'>Ehi</span>
      </div>
      <div className='loading-texts'>
        <p className='loading-percent'>"{loadingTimer}</p>
      </div>
    </div>
  )
}

export default Loading
