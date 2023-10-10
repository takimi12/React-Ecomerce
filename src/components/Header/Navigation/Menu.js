import React from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

const Menu = ({ source, className }) => {
    let menuView;

    if (source) {
        menuView = source.map((item) => {
         if (item.megaContent) {
                return <MegaMenu source={item} key={item.text} />;
            } else {
                return (
                    <li key={item.text}>
                        <Link to={item.url}>
                            {item.icon && <i className={item.icon}></i>}
                            {item.text}
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    No menu item.
                </a>
            </li>
        );
    }

    return <ul className={className}>{menuView}</ul>;
};

export default Menu;
