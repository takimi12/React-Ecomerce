import React, { useEffect, useState } from 'react';
import styles from './Account.module.scss';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../../components/admin/navbar/Navbar';
import ViewProducts from '../../components/admin/viewProducts/ViewProducts';
import AddProduct from '../../components/admin/addProduct/AddProduct';
import Home from '../../components/admin/home/Home';
import Orders from '../../components/admin/orders/Orders';
import AdminOnlyRoute from '../../components/adminOnlyRoute/AdminOnlyRoute';
import ProductDetails from '../../components/product/productDetails/ProductDetails';
import OrderDetails from '../../components/admin/orderDetails/OrderDetails';
import { FaUser, FaBell, FaFileAlt, FaPowerOff, FaHeart,FaChartBar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER, selectEmail } from '../../redux/slice/authslice';
import { toast } from 'react-toastify';




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

              {/* <Link to="/account/user-information" className={styles.listLink}>
                <li className={styles.list}>
                  <FaUser /> Account information
                </li>
              </Link> */}
              <Link to="/account/notifications" className={styles.listLink}>
                <li className={styles.list}>
                  <FaChartBar/> Compare
                </li>
              </Link>
              <Link to="/account/notifications" className={styles.listLink}>
                <li className={styles.list}>
                  <FaHeart /> Wishlist
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
          <Route path="orders-details/:id" element={<OrderDetails />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
