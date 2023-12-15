import React, { useEffect, useState } from 'react';
import styles from './Account.module.scss';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../../components/admin/navbar/Navbar';
import ViewProducts from '../../components/admin/viewProducts/ViewProducts';
import AddProduct from '../../components/admin/addProduct/AddProduct';
import Home from '../../components/admin/home/Home';
import AdminOnlyRoute from '../../components/adminOnlyRoute/AdminOnlyRoute';
import {  FaFileAlt, FaPowerOff} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER, selectEmail } from '../../redux/slice/authslice';
import { toast } from 'react-toastify';
import { CiHeart } from 'react-icons/ci';
import { IoBarChartOutline } from 'react-icons/io5';
import Orders from '../../components/admin/orders/Orders';
import ProductDetails from '../../components/product/productDetails/ProductDetails';
import OrderDetails from '../../components/admin/orderDetails/OrderDetails';

const Account = () => {
  const [displayName, setdisplayName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <div class="ps-section__left">
          <div class="ps-widget__content">
            <ul class="ps-list--user-links">
              <AdminOnlyRoute>
                <Navbar />
              </AdminOnlyRoute>
         
              <Link to="/account/orders" className={styles.listLink}>
        <li className={styles.list}>
        <FaFileAlt /> Orders
        </li>
      </Link>
      <Link 
              to="/wishlist"
               className={styles.listLink}>
                <li className={styles.list}>
                <CiHeart  /> WishList
                </li>
              </Link>
      <Link 
              to="/compare"
               className={styles.listLink}>
                <li className={styles.list}>
                 <IoBarChartOutline  /> Compare
                </li>
              </Link>

              <Link 
              onClick={logoutUser}
              to="/"
               className={styles.listLink}>
                <li className={styles.list}>
                  <FaPowerOff /> Logout
                </li>
              </Link>

            </ul>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="all-products" element={<ViewProducts />} />
          <Route path="add-product/:id" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />   
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/orders-details/:id" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
