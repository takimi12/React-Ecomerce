import React from 'react';
import one from './payment-method/1.jpg';
import two from './payment-method/2.jpg';
import three from './payment-method/3.jpg';
import four from './payment-method/4.jpg';
import five from './payment-method/5.jpg';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy;  2021 Martfury. All Rights Reserved</p>
        <p className='ps-footer__copyright__payment'>
            <span>We Using Safe Payment For:</span>
           <div className='Logotype'>            <a href="#">
                <img className="ps-footer__copyright__payment--img"src={one} />
            </a>
            <a href="#">
                <img className="ps-footer__copyright__payment--img"src={two}  />
            </a>
            <a href="#">
                <img className="ps-footer__copyright__payment--img"src={three}  />
            </a>
            <a href="#">
                <img className="ps-footer__copyright__payment--img"src={four}  />
            </a>
            <a href="#">
                <img className="ps-footer__copyright__payment--img"src={five}  />
            </a>
            </div>
        </p>
    </div>
);

export default FooterCopyright;
 