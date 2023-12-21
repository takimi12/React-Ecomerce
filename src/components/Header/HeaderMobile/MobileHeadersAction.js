import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MobileHeaderAction.module.scss';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import {
    REMOVE_ACTIVE_USER,
    SET_ACTIVE_USER
  } from '../../../redux/slice/authslice';
  import { 
    CALCULATE_TOTAL_QUANTITY, 
    selectCartTotalQuantity,
 } from '../../../redux/slice/cartslice';

const MobileHeaderActions = () => {
    const [displayName, setdisplayName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
  

  
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            
            if(user.displayName == null) {
                const ul = user.email.substring(0, user.email.indexOf("@"));
                const uName = ul.charAt(0).toUpperCase() + ul.slice(1);
                setdisplayName(uName);
            } 
            else{
                setdisplayName(user.displayName);
            }

            dispatch(SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName ? user.displayName : displayName,
                userID: user.uid,
            }))
        } else {
            setdisplayName("");
            dispatch(REMOVE_ACTIVE_USER());
        }
      });
}, [dispatch, displayName])

  
  useEffect(()  => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [dispatch])
  
    return (
        <div className="navigation__right">
         <div className={styles['user--header']}>
  <p className={styles.welcome}>Witaj <br/> <span className={styles.WelcomeSpan}>{displayName}</span></p>
    <div className={styles['block--left']}>
    <Link to="/account" >
    <i className={`${styles.icon} icon-user`}></i>
    </Link>
 
    </div>
    </div>

      
            <Link href="#">
            <a
          className={`${styles['header--extra']} ${styles['cart-hover']}`}
          href="/cart"
          >
          <i className={`${styles.icon} icon-bag2`}>
            <span className={styles.counter}>{cartTotalQuantity}</span>
          </i>
        </a>
                </Link>

        </div>
    );
};

export default MobileHeaderActions;
