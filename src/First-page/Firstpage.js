import React, { useState, useEffect, useRef } from 'react'
import './Firstpage.css'
import { gsap } from 'gsap'
import Typewriter from 'typewriter-effect'
import PageSlider from '../Page-slider/Pageslider'
import { useGlobalContext } from '../context'

const Firstpage = () => {
  const { typeWriter, setTypeWriter } = useGlobalContext()

  const [loadingTimer, setLoadingTimer] = useState(0)
  const [firstPageLoaded, setFirstPageLoaded] = useState(false)
  const [wordingsLoaded, setWordingsLoaded] = useState(false)
  const [secondSlider, setSecondSlider] = useState(false)
  const firstPageSection = useRef(null)
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
        .add(() => setSecondSlider(true))
        .from('.slide-content-label', {
          x: 15,
          opacity: 0,
          stagger: 0.5,
        })
        .add(() => setWordingsLoaded(true))
    }
  }, [firstPageLoaded])

  useEffect(() => {
    if (secondSlider) {
      firstPageSection.current.style.display = 'none'
    }
  }, [secondSlider])

  return (
    <>
      <section className='first-page-all'>
        {typeWriter && <PageSlider />}
        <div className='scroll-page-section'>
          <div className='slide-page-container'>
            <div className='page-slide-nav'>
              <p className='slide-nav-content'>Shop With Ehi</p>
            </div>
            {secondSlider && (
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
                                })
                              }}
                              options={{
                                strings: [
                                  'Gowns?',
                                  'Shirts?',
                                  'Tops?',
                                  'Trousers?',
                                  'Bags?',
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
            )}
          </div>
        </div>
        {/******** FIRST PAGE SECTION  *******/}
        <section className='first-page' ref={firstPageSection}>
          {/******** FIRST PAGE HEADER  *******/}

          <div className='first-page-header'>
            <p className='first-page-wordings'>The Best</p>
          </div>
          {/******** FIRST PAGE BODY  *******/}

          <div className='first-page-body'>
            {/******** FIRST PAGE BODY CONTAINER  *******/}

            <div className='page-body-content'>
              <span className='firstpage-content'>
                <span className='coloredpage-content'>SH</span>OP
              </span>
              <span className='firstpage-content'>
                WI
                <span className='coloredpage-content'>TH</span>
              </span>
              <span className='firstpage-content'>
                EH
                <span className='coloredpage-content'>I</span>
              </span>
            </div>
            <div className='page-body-img'></div>
          </div>

          {/******** FIRST PAGE FOOTER  *******/}

          <div className='first-page-footer'>
            <span className='first-footer-content'>
              <p className='first-page-wordings'>Afforadable Clothing Space</p>
            </span>
            <div className='loading-timer'>"{loadingTimer}</div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Firstpage
