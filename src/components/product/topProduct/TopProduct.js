import React, { useState } from 'react';
import { sliderData } from './slider-data';
import { RightSection } from './slider-data';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './TopProduct.module.scss';
import obrazek1 from '../../../assets/img/shop/top/1 (4).jpg';
import obrazek2 from '../../../assets/img/shop/top/2 (3).jpg';
import obrazek3 from '../../../assets/img/shop/top/3 (2).jpg';
import obrazek4 from '../../../assets/img/shop/top/4 (2).jpg';
import obrazek5 from '../../../assets/img/shop/top/5 (2).jpg';
import obrazek6 from '../../../assets/img/shop/top/6 (2).jpg';
import obrazek7 from '../../../assets/img/shop/top/7 (1).jpg';
import obrazek8 from '../../../assets/img/shop/top/8 (2).jpg';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  };

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.container}>
          <div className={styles.SectionLeft}>
            <div className={styles.arrow} onClick={prevSlide}>
              <AiOutlineArrowLeft className={`${styles['left-arrow']} `} />
            </div>
            <div className={`${styles.arrow} ${styles['right-arrow']}  `} onClick={nextSlide}>
              <AiOutlineArrowRight className={`${styles['right-arrow']} `} />
            </div>

            {sliderData.map((slide, index) => {
              const { image, heading, desc } = slide;
              return (
                <div
                  key={index}
                  className={
                    index === currentSlide
                      ? `${styles.slide} ${styles.current} fade-in`
                      : `${styles.slide} fade-out`
                  }
                >
                  {index === currentSlide && (
                    <>
                      <img src={image} alt="slide" />
                 
                    </>
                  )}
                </div>
              );
            })}
          </div>


        </div>
      </div>
      <section className={styles.bottomImage}>
      <div className={styles.productWrapper}>
        <a href="/shop"><img src={obrazek1} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek2} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek3} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek4} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek5} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek6} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek7} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek8} alt="martfury" /></a>
      </div>
    </section>
    </>
  );
};
export default Slider;
