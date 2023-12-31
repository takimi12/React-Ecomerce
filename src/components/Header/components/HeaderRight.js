import React, { useEffect, useState } from 'react';
import styles from './HeaderRight.module.scss';
import { auth } from '../../../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER
} from '../../../redux/slice/authslice';
import {  selectEmail, selectDisplayName } from '../../../redux/slice/authslice';
import ShowOnLogin, { ShowOnLogOut } from '../../hidden/hiddenLink';
import { 
  CALCULATE_TOTAL_QUANTITY, 
  selectCartTotalQuantity,
  selectCompareItems,
  selectWishlistItems } from '../../../redux/slice/cartslice';
import CartHover from './CartHover';

const HeaderRight = () => {
  const [displayName, setdisplayName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isCartHovered, setIsCartHovered] = useState(false); // New state

// ... (existing code)

const handleCartHover = () => {
  setIsCartHovered(true);
};

const handleCartLeave = () => {
  setIsCartHovered(false);
};


  /// cart amount visible 

const cartTotalQuantity = useSelector(selectCartTotalQuantity);


const compareItems = useSelector(selectCompareItems);
const wishlistItems = useSelector(selectWishlistItems);






useEffect(()  => {
  dispatch(CALCULATE_TOTAL_QUANTITY());
}, [dispatch])



  const email = useSelector(selectEmail);

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



  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('Wylogowane pomyślnie');
        navigate('/');
        dispatch(REMOVE_ACTIVE_USER());

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
              <span className={styles.counter}>{compareItems.length}</span>
            </i>
          </a>
        </div>
        <div className={styles['parent']}>
          <a className={styles['header--extra']} href="/wishlist">
            <i className={`${styles.icon} icon-heart`}>
              <span className={styles.counter}>{wishlistItems.length}</span>
            </i>
          </a>
        </div>
        <div className={styles['parent']}>
        <a
          className={`${styles['header--extra']} ${styles['cart-hover']}`}
          href="/cart"
          onMouseEnter={handleCartHover}
          onMouseLeave={handleCartLeave}
        >
          <i className={`${styles.icon} icon-bag2`}>
            <span className={styles.counter}>{cartTotalQuantity}</span>
          </i>
        </a>

        <div className={`cart--box ${isCartHovered ? 'active' : ''}`}>
          <CartHover active={isCartHovered} />
        </div>
      </div>


          <>
         <ShowOnLogin>
  <div className={styles['user--header']}>
  <p className={styles.welcome}>Witaj <br/> <span className={styles.WelcomeSpan}>{displayName}</span></p>
 
    <div className={styles['block--left']}>
    <NavLink to="/account" >
    <i className={`${styles.icon} icon-user`}></i>
    </NavLink>
 
    </div>

  </div>
 
  </ShowOnLogin>
  <ShowOnLogOut>
  <div className={styles['user--header']}>
    <div className={styles['block--left']}>
      <i className={`${styles.icon} icon-user`}></i>
    </div>
    <div className={styles['block--right']}>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>

  </div>
</ShowOnLogOut>
          </>
        
      </div>
    </>
  );
};

export default HeaderRight;