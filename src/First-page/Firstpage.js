import React, { useState, useEffect } from 'react'
import './Firstpage.css'
import { gsap } from 'gsap'
import Typewriter from 'typewriter-effect'
import { CgCross } from 'react-icons/cg'
import PageSlider from '../Page-slider/Pageslider'
import { useGlobalContext } from '../context'

const Firstpage = () => {
  const { typeWriter, setTypeWriter } = useGlobalContext()

  const [loadingTimer, setLoadingTimer] = useState(0)
  const [firstPageLoaded, setFirstPageLoaded] = useState(false)
  const [wordingsLoaded, setWordingsLoaded] = useState(false)
  // const [typeWriter, setTypeWriter] = useState(false)
  useEffect(() => {
    if (loadingTimer < 100) {
      setTimeout(() => {
        setLoadingTimer(loadingTimer + 10)
      }, 700)
    } else {
      setFirstPageLoaded(true)
    }
  }, [loadingTimer])
  useEffect(() => {
    const firstContentTl = gsap.timeline()

    firstContentTl
      .from('.first-page-wordings', {
        x: 10,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
      })
      .from('.page-body-img', {
        width: 0,
        opacity: 0,
        ease: 'expo.out',
      })
      .from('.flower-decoration', {
        opacity: 0,
        x: 10,
      })
      .from('.firstpage-content', {
        opacity: 0,
        y: 10,
        stagger: 0.3,
      })
  }, [])

  useEffect(() => {
    const pageLoad = gsap.timeline()
    if (firstPageLoaded) {
      pageLoad
        .to('.scroll-page-section', {
          width: '100%',
          ease: 'slow',
          duration: 0.5,
          delay: 1,
          transition: 'all',
        })
        .from('.slide-page-container', {
          delay: 0,
          opacity: 0,
          y: 10,
          transition: 'ease-in',
          duration: 1.5,
        })
        .from('.slide-content-label', {
          x: 15,
          opacity: 0,
          stagger: 0.5,
        })
        .add(() => setWordingsLoaded(true))
    }
  }, [firstPageLoaded])

  // useEffect(() => {
  //   if (typeWriter) {
  //     setTypeWriter(false)
  //   } else {
  //     setTypeWriter(true)
  //   }
  // }, [])
  return (
    <>
      {typeWriter && <PageSlider />}
      <div className='scroll-page-section'>
        <div className='slide-page-container'>
          <div className='page-slide-nav'>
            <p className='slide-nav-content'>Shop With Ehi</p>
          </div>
          <div className='page-slide-body'>
            <div className='slide-image-body'></div>
            <div className='slide-body-content'>
              <div className='slide-contents-arrow'>/22</div>
              <div className='slide-content-texts'>
                <p className='slide-content-label'>Looking For</p>
                <p className='slide-content-label'>Thrift</p>
                <p className='slide-content-label'>
                  {!wordingsLoaded
                    ? 'Clothes?'
                    : wordingsLoaded && (
                        <Typewriter
                          onInit={(typewriter) => {
                            typewriter.callFunction(() => {
                              setTypeWriter(true)
                              console.log(true)
                            })
                          }}
                          options={{
                            strings: [
                              'Gowns?',
                              'Shirts?',
                              'Tops?',
                              'Trousers?',
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='first-page section'>
        <div className='first-page-header'>
          <p className='first-page-wordings'>The Best</p>
        </div>
        <div className='first-page-body'>
          <div className='page-body-content'>
            <p className='firstpage-content'>
              <span className='coloredpage-content'>SH</span>OP
            </p>
            <p className='firstpage-content'>
              WI
              <span className='coloredpage-content'>TH</span>
            </p>
            <p className='firstpage-content'>
              EH
              <span className='coloredpage-content'>I</span>
            </p>
          </div>
          <div className='page-body-img'></div>
        </div>
        <div className='first-page-footer'>
          <span className='first-footer-content'>
            <p className='first-page-wordings'>Afforadable Clothing Space</p>
          </span>
          <div className='loading-timer'>"{loadingTimer}</div>
        </div>
      </section>
    </>
  )
}

export default Firstpage
