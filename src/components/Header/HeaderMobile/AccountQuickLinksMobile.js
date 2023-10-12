import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { logOut } from '../../../../store/auth/action';
import { Dropdown, Menu } from 'antd';

const AccountQuickLinks = ({ dispatch }) => {
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
        },
        {
            text: 'Notifications',
            url: '/account/notifications',
        },
        {
            text: 'Invoices',
            url: '/account/invoices',
        },
        {
            text: 'Address',
            url: '/account/addresses',
        },
        {
            text: 'Recent Viewed Product',
            url: '/account/recent-viewed-product',
        },
        {
            text: 'Wishlist',
            url: '/account/wishlist',
        },
    ];

    // const handleLogout = e => {
    //     e.preventDefault();
    //     // this.props.dispatch(logOut());
    //     dispatch(logOut()); // Potrzebna jest odpowiednia akcja i reducer
    // };
    const menu = (
        <Menu>
            {accountLinks.map(link => (
                <Menu.Item key={link.url}>
                    <Link to={link.url}>
                        <a>{link.text}</a>
                    </Link>
                </Menu.Item>
            ))}
            {/* <Menu.Item>
                <a href="#" onClick={handleLogout}>
                    Logout
                </a>
            </Menu.Item> */}
        </Menu>
    );
    

    return (
        <Dropdown overlay={menu} placement="bottomLeft">
            <a href="#" className="header__extra ps-user--mobile">
                <i className="icon-user"></i>
            </a>
        </Dropdown>
    );
};

export default AccountQuickLinks;
