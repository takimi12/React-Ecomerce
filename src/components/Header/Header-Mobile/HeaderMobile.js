import React from 'react';
import { Link } from 'react-router-dom';
import MobileHeaderActions from './MobileHeadersAction';
import Logo from '../../../img/logo_light.png'

const HeaderMobile = () => {
  return (
    <header className=" header--mobile">
      <div className="header__top">
        <div className="header__left">
          <p>Welcome to Martfury Online Shopping Store !</p>
        </div>
        <div className="header__right">
          <ul className="navigation__extra">
            <li>
              <Link href="/vendor/become-a-vendor">
                <a>Sell on Martfury</a>
              </Link>
            </li>
            <li>
              <Link href="/account/order-tracking">
                <a>Tract your order</a>
              </Link>
            </li>
  
          </ul>
        </div>
      </div>
      <div className="navigation--mobile">
        <div className="navigation__left">
          <Link href="/">
            <a className="ps-logo">
              <img
                src={Logo}
                alt="martfury"
              />
            </a>
          </Link>
        </div>
        <MobileHeaderActions />
      </div>
 
    </header>
  );
}

export default HeaderMobile;
