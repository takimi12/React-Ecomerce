import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationList.module.scss";
import SearchContent from "./SearchContent";
import Categories from "./Categories";

const NavigationList = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const location = useLocation();

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCategoryOpen(false);
  };

  const handleCategoryClick = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsSearchOpen(false);
  };

  const isShopPage = location.pathname === "/shop";

  return (
    <>
      {isSearchOpen && <SearchContent onClose={() => setIsSearchOpen(false)} />}
      {isCategoryOpen && <Categories onClose={() => setIsCategoryOpen(false)} />}

      <div className={styles.navigationList}>
        <div className={styles.content}>
          <Link className={styles.item}>
            <i className="icon-menu"></i>
            <span> Menu</span>
          </Link>
          {isShopPage ? (
            // Show only Categories link when on the /shop page
            <Link className={styles.item} onClick={handleCategoryClick}>
              <i className="icon-list4"></i>
              <span> Categories</span>
            </Link>
          ) : (
            // Show Shop link for other pages
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
