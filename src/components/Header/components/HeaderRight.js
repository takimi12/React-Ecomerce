import React, { useEffect } from 'react';
import styles from './HeaderRight.module.scss';
import { auth } from '../../../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  LOGOUT_USER,
  SET_ACTIVE_USER
} from '../../../redux/slice/authslice';
import {  selectEmail, selectDisplayName } from '../../../redux/slice/authslice';



const HeaderRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const email = useSelector(selectEmail);

  const authData = JSON.parse(localStorage.getItem('authData'));

  if (authData) {
    dispatch(SET_ACTIVE_USER(authData));
    
  }


  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('Wylogowane pomyślnie');
        navigate('/');
        dispatch(LOGOUT_USER());
        localStorage.removeItem('authData');
        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className={styles['Header-actions']}>
        <div className={styles['parent']}>
          <a className={styles['header--extra']} href="/compare">
            <i className={`${styles.icon} icon-chart-bars`}>
              <span className={styles.counter}></span>
            </i>
          </a>
        </div>
        <div className={styles['parent']}>
          <a className={styles['header--extra']} href="/compare">
            <i className={`${styles.icon} icon-heart`}>
              <span className={styles.counter}></span>
            </i>
          </a>
        </div>
        <div className={styles['parent']}>
          <a className={styles['header--extra']} href="/compare">
            <i className={`${styles.icon} icon-bag2`}>
              <span className={styles.counter}></span>
            </i>
          </a>
        </div>


          <>
          {authData ? (
  <div className={styles['user--header']}>
    <div className={styles['block--left']}>
      <i className={`${styles.icon} icon-user`}></i>
    </div>
    <p className={styles.welcome}>Witaj <br/> <span className={styles.WelcomeSpan}>{authData.displayName || authData.email.slice(0, 5)}</span></p>
    <NavLink to="/" onClick={logoutUser}>
      Logout
    </NavLink>
  </div>
): (
  <div className={styles['user--header']}>
    <div className={styles['block--left']}>
      <i className={`${styles.icon} icon-user`}></i>
    </div>
    <div className={styles['block--right']}>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  </div>
)}
          </>
        
      </div>
    </>
  );
};

export default HeaderRight;
