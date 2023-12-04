import React, { useState, useEffect } from 'react';



import Logo from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import SearchHeader from '../components/HeaderSearch';
import NavigationDefault from '../Navigation/NavigationDefault';
import { stickyHeader } from '../components/StickyHeader';
import useFetchCollection from '../../../customHooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRICE_RANGE, STORE_PRODUCTS, selectProducts } from '../../../redux/slice/productslice'

const Header = () => {
  const {data, isLoading} = useFetchCollection("products");
  const list = useSelector(selectProducts)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
          products: data,
      })
      );
   
  }, [dispatch, data])

  useEffect(() => {
    const handleScroll = () => {
      stickyHeader();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header" data-sticky="true" id="headerSticky">
      <div className="header__top">
        <div className="container">
          <div className="header__left">
            <Logo />
          </div>
          <div className="header__center">
            <SearchHeader list={list}/>
          </div>
          <div className="header__right">
            <HeaderRight />
          </div>
               </div>
      </div>
      <NavigationDefault />
    </header>
  );
};

export default Header;