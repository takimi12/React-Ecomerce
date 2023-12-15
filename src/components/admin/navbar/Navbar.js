import React from 'react';
import { FaHome, FaBox, FaPlus,  FaFileAlt } from 'react-icons/fa';
import styles from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../../redux/slice/authslice';
import { NavLink } from 'react-router-dom';


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Navbar = () => {
  const userName = useSelector(selectUserName);

  return (
    <>
      <NavLink to="/account/home" className={styles.listLink}>
        <li className={styles.list}>
          <FaHome /> Home
        </li>
      </NavLink>
      <NavLink to="/account/all-products" className={styles.listLink}>
        <li className={styles.list}>
          <FaBox /> All Products
        </li>
      </NavLink>
      <NavLink to="/account/add-product/ADD" className={styles.listLink}>
        <li className={styles.list}>
          <FaPlus /> Add Products
        </li>
      </NavLink>

   
    </>
  );
};

export default Navbar;
