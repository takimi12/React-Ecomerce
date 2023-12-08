import React from 'react';
import Header from './HeaderDefault/HeaderDefault';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import NavigationList from './Navigation/MobileNavigation/NavigationList';

function MainHeader() {
  return (
    <>
           <Header /> 
      <HeaderMobile />
      <NavigationList />

       </>
    
  );
}

export default MainHeader;
