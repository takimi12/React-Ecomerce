import React from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { toast } from 'react-toastify';
import { REMOVE_ACTIVE_USER } from '../../../redux/slice/authslice';
import { useDispatch } from 'react-redux';

const NavigationDefault = ({ mobileMenu }) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('Wylogowane pomyślnie');
        Navigate('/');
        dispatch(REMOVE_ACTIVE_USER());
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <nav className={`${styles.navigationMain} ${mobileMenu ? styles.mobileMenu : ''}`}>
        <div className={styles.navigation}>
          <Link to="/shop" className={styles.navigationLink}>
            Shop
          </Link>
          <Link to="/About" className={styles.navigationLink}>
            About us
          </Link>
          <Link to="/Contact" className={styles.navigationLink}>
            Contact
          </Link>
          <Link to="/faq" className={styles.navigationLink}>
            Faq
          </Link>
          <Link to="/blog" className={styles.navigationLink}>
            Blog
          </Link>
          {mobileMenu && (
            <>
              <Link to="/account" className={styles.navigationLink}>
                Account
              </Link>
              <Link to="/account" className={styles.navigationLink}>
                Track Your Order
              </Link>
  
              <NavLink className={styles.navigationLink} 
              to="/" onClick={logoutUser}>
                Logout
              </NavLink>
            </>
          )}
        </div>

        <div className={styles.navigationRight}>
          <Link to="/account" className={styles.account}>
            Account
          </Link>
          <Link to="/account" className={styles.account}>
            Track Your Order
          </Link>

          <NavLink to="/" onClick={logoutUser}>
            Logout
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavigationDefault;
