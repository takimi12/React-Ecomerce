import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationList.module.scss";
import SearchContent from "./SearchContent";
import Categories from "./Categories";
import Menu from "./Menu";

const NavigationList = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCategoryOpen(false);
    setIsMenuOpen(false); // Close the menu when opening search
  };

  const handleCategoryClick = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsSearchOpen(false);
    setIsMenuOpen(false); // Close the menu when opening categories
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
    setIsCategoryOpen(false); // Close categories when opening the menu
  };

  const isShopPage = location.pathname === "/shop";

  return (
    <>
      {isSearchOpen && <SearchContent onClose={() => setIsSearchOpen(false)} />}
      {isCategoryOpen && <Categories onClose={() => setIsCategoryOpen(false)} />}
      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}

      <div className={styles.navigationList}>
        <div className={styles.content}>
          <Link className={styles.item} onClick={handleMenuClick}>
            <i className="icon-menu"></i>
            <span> Menu</span>
          </Link>
          {isShopPage ? (
            <Link className={styles.item} onClick={handleCategoryClick}>
              <i className="icon-list4"></i>
              <span> Categories</span>
            </Link>
          ) : (
            <Link className={styles.item} to="/shop">
              <i className="icon-list4"></i>
              <span> Shop</span>
            </Link>
          )}
          <Link className={styles.item} onClick={handleSearchClick}>
            <i className="icon-magnifier"></i>
            <span> Search</span>
          </Link>
          <Link className={styles.item} to="/cart">
            <i className="icon-bag2"></i>
            <span> Cart</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationList;
