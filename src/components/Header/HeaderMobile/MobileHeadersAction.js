import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const MobileHeaderActions = ({ auth, ecomerce }) => {
    return (
        <div className="navigation__right">
            <Link href="#">
                <a className="header__extra" href="#">
                    <i className="icon-bag2"></i>
                  
                </a>
            </Link>

      
            <Link href="#">
                <div className="header__extra">
                        <i className="icon-user"></i>
                </div>
                </Link>

        </div>
    );
};

export default MobileHeaderActions;
