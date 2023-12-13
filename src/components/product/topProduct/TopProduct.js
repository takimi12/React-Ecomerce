import React from 'react';
import obrazek1 from '../../../assets/img/shop/top/1 (4).jpg';
import obrazek2 from '../../../assets/img/shop/top/2 (3).jpg';
import obrazek3 from '../../../assets/img/shop/top/3 (2).jpg';
import obrazek4 from '../../../assets/img/shop/top/4 (2).jpg';
import obrazek5 from '../../../assets/img/shop/top/5 (2).jpg';
import obrazek6 from '../../../assets/img/shop/top/6 (2).jpg';
import obrazek7 from '../../../assets/img/shop/top/7 (1).jpg';
import obrazek8 from '../../../assets/img/shop/top/8 (2).jpg';


const ShopComponent = () => {
  return (
    <div>
      <div className="ps-shop-banner">
        <div className="slick-slider ps-carousel slick-initialized" dir="ltr">
          <button className="slick-arrow slick-prev slick-arrow slick-prev">
            <i className="icon-chevron-left"></i>
          </button>
          <div className="slick-list">
            <div
              className="slick-track"
              style={{
                width: '7285px',
                opacity: '1',
                transform: 'translate3d(-1457px, 0px, 0px)',
                transition: '-webkit-transform 1000ms ease 0s',
              }}
            >
              <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '1457px' }}>
                <div>
                  <img src="/static/img/slider/shop-default/2.jpg" alt="martfury" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }} />
                </div>
              </div>
              <div data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{ outline: 'none', width: '1457px' }}>
                <div>
                  <img src="/static/img/slider/shop-default/1.jpg" alt="martfury" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }} />
                </div>
              </div>
              <div data-index="1" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: 'none', width: '1457px' }}>
                <div>
                  <img src="/static/img/slider/shop-default/2.jpg" alt="martfury" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }} />
                </div>
              </div>
              <div data-index="2" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '1457px' }}>
                <div>
                  <img src="/static/img/slider/shop-default/1.jpg" alt="martfury" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }} />
                </div>
              </div>
              <div data-index="3" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '1457px' }}>
                <div>
                  <img src="/static/img/slider/shop-default/2.jpg" alt="martfury" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }} />
                </div>
              </div>
            </div>
          </div>
          <button className="slick-arrow slick-next slick-arrow slick-next">
            <i className="icon-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="ps-shop-brand">
        <a href="/shop"><img src={obrazek1} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek2} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek3} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek4} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek5} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek6} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek7} alt="martfury" /></a>
        <a href="/shop"><img src={obrazek8} alt="martfury" /></a>
      </div>
    </div>
  );
};

export default ShopComponent;
