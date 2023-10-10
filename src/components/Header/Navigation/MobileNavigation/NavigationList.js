import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
// import PanelMenu from '../panel/PanelMenu';
// import PanelCartMobile from '../panel/PanelCartMobile';
// import PanelSearch from '../panel/PanelSearch';
// import PanelCategories from '../panel/PanelCategories';

const NavigationList = () => {
    // const [menuDrawer, setMenuDrawer] = useState(false);
    // const [cartDrawer, setCartDrawer] = useState(false);
    // const [searchDrawer, setSearchDrawer] = useState(false);
    // const [categoriesDrawer, setCategoriesDrawer] = useState(false);

    // const handleDrawerClose = () => {
    //     setMenuDrawer(false);
    //     setCartDrawer(false);
    //     setSearchDrawer(false);
    //     setCategoriesDrawer(false);
    // };

    // const handleShowMenuDrawer = () => {
    //     setMenuDrawer(!menuDrawer);
    //     setCartDrawer(false);
    //     setSearchDrawer(false);
    //     setCategoriesDrawer(false);
    // };

    // const handleShowCartDrawer = () => {
    //     setMenuDrawer(false);
    //     setCartDrawer(!cartDrawer);
    //     setSearchDrawer(false);
    //     setCategoriesDrawer(false);
    // };

    // const handleShowSearchDrawer = () => {
    //     setMenuDrawer(false);
    //     setCartDrawer(false);
    //     setSearchDrawer(!searchDrawer);
    //     setCategoriesDrawer(false);
    // };

    // const handleShowCategoriesDrawer = () => {
    //     setMenuDrawer(false);
    //     setCartDrawer(false);
    //     setSearchDrawer(false);
    //     setCategoriesDrawer(!categoriesDrawer);
    // };

    return (
        // <div className="navigation--list">
        //     {/* ... Drawer components ... */}
        //     <div className="navigation__content">
        //         <a
        //             className={`navigation__item ${
        //                 menuDrawer === true ? 'active' : ''
        //             }`}
        //             onClick={handleShowMenuDrawer}>
        //             <i className="icon-menu"></i>
        //             <span> Menu</span>
        //         </a>
        //         <a
        //             className={`navigation__item ${
        //                 categoriesDrawer === true ? 'active' : ''
        //             }`}
        //             onClick={handleShowCategoriesDrawer}>
        //             <i className="icon-list4"></i>
        //             <span> Categories</span>
        //         </a>
        //         <a
        //             className={`navigation__item ${
        //                 searchDrawer === true ? 'active' : ''
        //             }`}
        //             onClick={handleShowSearchDrawer}>
        //             <i className="icon-magnifier"></i>
        //             <span> Search</span>
        //         </a>
        //         <a
        //             className={`navigation__item ${
        //                 cartDrawer === true ? 'active' : ''
        //             }`}
        //             onClick={handleShowCartDrawer}>
        //             <i className="icon-bag2"></i>
        //             <span> Cart</span>
        //         </a>
        //     </div>
        // </div>
        <div class="navigation--list">
  <div class="navigation__content">
    <a class="navigation__item false">
      <i class="icon-menu"></i>
      <span> Menu</span>
    </a>
    <a class="navigation__item false">
      <i class="icon-list4"></i>
      <span> Categories</span>
    </a>
    <a class="navigation__item false">
      <i class="icon-magnifier"></i>
      <span> Search</span>
    </a>
    <a class="navigation__item" href="/account/shopping-cart">
      <i class="icon-bag2"></i>
      <span> Cart</span>
    </a>
  </div>
</div>
    );
};



export default NavigationList;
