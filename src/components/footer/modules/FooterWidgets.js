import React from 'react';

const widgetsData = [
  {
    title: 'Contact us',
    content: (
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
    ),
  },
  {
    title: 'Quick Links',
    content: (
      <ul className="ps-list--">
        <li>
          <a href="/page/blank">Content</a>
        </li>
        <li>
          <a href="/page/blank">Content</a>
        </li>
        <li>
          <a href="/page/blank">Content</a>
        </li>
        <li>
          <a href="/page/blank">Content</a>
        </li>
        <li>
          <a href="/page/faqs">Content</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Company',
    content: (
      <ul className="ps-list--">
        <li>
          <a href="/page/about-us">Content</a>
        </li>
        <li>
          <a href="/page/blank">Content</a>
        </li>
        <li>
          <a href="/page/blank">Content</a>
        </li>
        <li>
          <a href="/page/contact-us">Content</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Business',
    content: (
      <ul className="ps-list--">
        <li>
          <a href="/page/about-us">Content</a>
        </li>
        <li>
          <a href="/account/checkout">Content</a>
        </li>
        <li>
          <a href="/account/user-information">Content</a>
        </li>
        <li>
          <a href="/shop">Content</a>
        </li>
      </ul>
    ),
  },
];

const FooterWidgets = () => (
  <div className="aside-parent">
    {widgetsData.map((widget, index) => (
      <aside key={index} className={`widget widget_${widget.title.toLowerCase().replace(' ', '-')}`}>
        <h4 className="widget-title">{widget.title}</h4>
        {widget.content}
      </aside>
    ))}
  </div>
);

export default FooterWidgets;
