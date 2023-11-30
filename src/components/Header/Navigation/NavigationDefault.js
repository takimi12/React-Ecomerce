import React from 'react';
import Menu from './Menu';
import menuData from '../../../assets/data/menu.json';
import MenuCategoriesDropdown from './MenuCategoriesDropdown';


const NavigationDefault = () => {


    return (
        <nav className="navigation">
            <div className="ps-container">
                <div className="navigation__right">
                    <Menu
                        source={menuData.menuPrimary.menu_1}
                        className="menu"
                    />
                    <ul className="navigation__extra">
                        <li>
                            <a href="/vendor/become-a-vendor" >
                                Sell on Martfury
                            </a>
                        </li>
                        <li>
                            <a href="/account/order-tracking" >
                                Tract your order
                            </a>
                        </li>
                   
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationDefault;
