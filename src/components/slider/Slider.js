import React, { useState } from 'react';
import { sliderData } from './slider-data';
import { RightSection } from './slider-data';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Styles from './Slider.module.scss';

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
      <div className={Styles.slider}>
        <div className={Styles.container}>
          <div className={Styles.SectionLeft}>
            <div className={Styles.arrow} onClick={prevSlide}>
              <AiOutlineArrowLeft className={`${Styles['left-arrow']} `} />
            </div>
            <div className={`${Styles.arrow} ${Styles['right-arrow']}  `} onClick={nextSlide}>
              <AiOutlineArrowRight className={`${Styles['right-arrow']} `} />
            </div>

            {sliderData.map((slide, index) => {
              const { image, heading, desc } = slide;
              return (
                <div
                  key={index}
                  className={
                    index === currentSlide
                      ? `${Styles.slide} ${Styles.current} fade-in`
                      : `${Styles.slide} fade-out`
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

          <div className={Styles.sectionRight}>
  {RightSection.map((right, index) => {
    const { image, link } = right;
    return (
      <a key={index} href={link} className={Styles.rightSlideLink}>
        <div className={Styles.rightSlide}>
          <img src={image} alt="slide" />
          <div className={Styles.content}>
          </div>
        </div>
      </a>
    );
  })}
</div>

        </div>
      </div>
    </>
  );
};
export default Slider;
