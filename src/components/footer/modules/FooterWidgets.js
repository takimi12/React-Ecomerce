import React from 'react';

const FooterWidgets = () => (
  <div className="aside-parent">
    <aside className="widget  widget_contact-us">
      <h4 className="widget-title">Contact us</h4>
      <div className="widget_content">
        <p>Call us 24/7</p>
        <h3>1800 97 97 69</h3>
        <p>
          502 New Design Str, Melbourne, Australia <br />
          <a href="mailto:contact@martfury.co">contact@martfury.co</a>
        </p>
        <ul className="ps-list--social">
          <li>
            <a className="facebook" href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a className="twitter" href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a className="google-plus" href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a className="instagram" href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <aside className="widget widget_footer">
      <h4 className="widget-title">Quick Links</h4>
      <ul className="ps-list--">
        <li>
          <a href="/page/blank">Policy</a>
        </li>
        <li>
          <a href="/page/blank">Term & Condition</a>
        </li>
        <li>
          <a href="/page/blank">Shipping</a>
        </li>
        <li>
          <a href="/page/blank">Return</a>
        </li>
        <li>
          <a href="/page/faqs">FAQs</a>
        </li>
      </ul>
    </aside>
    <aside className="widget widget_footer">
      <h4 className="widget-title">Company</h4>
      <ul className="ps-list--">
        <li>
          <a href="/page/about-us">About Us</a>
        </li>
        <li>
          <a href="/page/blank">Affiliate</a>
        </li>
        <li>
          <a href="/page/blank">Career</a>
        </li>
        <li>
          <a href="/page/contact-us">Contact</a>
        </li>
      </ul>
    </aside>
    <aside className="widget widget_footer">
      <h4 className="widget-title">Business</h4>
      <ul className="ps-list--">
        <li>
          <a href="/page/about-us">Our Press</a>
        </li>
        <li>
          <a href="/account/checkout">Checkout</a>
        </li>
        <li>
          <a href="/account/user-information">My account</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
      </ul>
    </aside>
  </div>
);

export default FooterWidgets;
