import React from "react";
import Navigation from "../Navigation";
import styles from "./Menu.module.scss";   
import { IoCloseSharp } from "react-icons/io5";

const Menu = ({ onClose }) => {
    const mobileMenu = true;
  return (

<div className={styles.searchWrapper}>
<div className={styles.searchContent}>
  <div className={styles.top}>
    <h4 className={styles.topHead}>Mobile Menu</h4>
    <button className={styles.close} onClick={onClose}>
      <IoCloseSharp size={30} />
    </button>
  </div>
</div>
<div className={styles.bottom}>
  <div>
    <div className={styles.searchWrapper1}>
    <Navigation mobileMenu={mobileMenu} />
    </div>
  </div>
</div>
</div>
  );
};

export default Menu;
