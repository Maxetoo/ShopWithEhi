import React, { useEffect } from 'react'
import { ImageData } from '../../../Assets/Images/Image-data'
import Courasel from '../CouraselBtn/Courasel'
import { gsap } from 'gsap'
const Products = ({ productSection }) => {
  useEffect(() => {
    const productTl = gsap.timeline()
    productTl.to('.products-header', {
      scrollTrigger: {
        trigger: '.products-header',
        start: 'top center',
      },
      opacity: 1,
      transition: 'ease 0.5s',
      duration: 1.5,
    })
  }, [])
  return (
    <article className='products-section' ref={productSection}>
      <div className='products-content'>
        <p className='products-header'>Products</p>
        <div className='products-img-container'>
          <div className='image-lists'>
            <div className='image-container'>
              <div className='product-list-item'>
                <img src={ImageData.tops} alt='Tops' className='product-img' />
                <div className='product-desc'>Vintage Top</div>
              </div>
            </div>
            <div className='image-container'>
              <div className='product-list-item'>
                <img src={ImageData.bags} alt='Bag' className='product-img' />
                <div className='product-desc'>Bag</div>
              </div>
            </div>
            <div className='image-container'>
              <div className='product-list-item'>
                <img
                  src={ImageData.shoes}
                  alt='Shoes'
                  className='product-img'
                />
                <div className='product-desc'>Shoe</div>
              </div>
            </div>
            <div className='image-container'>
              <div className='product-list-item'>
                <img
                  src={ImageData.trouser}
                  alt='Trouser'
                  className='product-img'
                />
                <div className='product-desc'>Trouser</div>
              </div>
            </div>
            <div className='image-container'>
              <div className='product-list-item'>
                <img src={ImageData.dress} alt='Gown' className='product-img' />
                <div className='product-desc'>Gown</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Courasel />
      {/* COURASEL UNDER  */}
    </article>
  )
}

export default Products
