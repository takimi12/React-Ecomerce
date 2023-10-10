import React, { useState, useEffect } from 'react';
import MiniCart from './Minicart';


const HeaderRight = () => {


    return (
        <div className="Header__actions">
            <div className='parent-compare'>
            <a className="header__extra" href="/compare">
                <i className="icon-chart-bars"></i>
                <span>
                    <i></i>
                </span>
            </a>
            </div>
            <div className='parent-wishlist'>
            <a className="header__extra" href="/account/wishlist" >
                <i className="icon-heart"></i>
                <span>
                    <i></i>
                </span>
            </a>
            </div>
            <div className='parent-cart'>
            <a className="header__extra" href="#" >
                <i className="icon-bag2"></i>
                <span>
                    <i></i>
                </span>
            </a>
            <MiniCart  />
            </div>

            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i className="icon-user"></i>
                </div>
                <div className="ps-block__right">
                    <a href="/account/login">Login</a>
                    <a href="/account/register">Register</a>
                </div>
            </div>
        </div>
    );
};



export default HeaderRight;
