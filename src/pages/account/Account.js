import React from 'react';
import styles from './Account.module.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/admin/navbar/Navbar';
import Home from '../../components/admin/home/Home';
import ViewProducts from '../../components/admin/viewProducts/ViewProducts';
import AddProduct from '../../components/admin/addProduct/AddProduct';

import Orders from '../../components/admin/orders/Orders';
import AdminOnlyRoute from '../../components/adminOnlyRoute/AdminOnlyRoute';
 

const Account = () => {
    return (
                <div className={styles.admin}>
                  
                    <div className={styles.navbar}>
                    <AdminOnlyRoute>
                    <Navbar /> 
                    </AdminOnlyRoute>
                    <div class="ps-section__left">
            <aside class="ps-widget--account-dashboard">
              <div class="ps-widget__header">
                <img src="/static/img/users/3.jpg" />
                <figure>
                  <figcaption>Hello</figcaption>
                  <p>username@gmail.com</p>
                </figure>
              </div>
              <div class="ps-widget__content">
                <ul class="ps-list--user-links">
          
                
                
                  <li class="active">
                    <a href="/account/user-information">
                      <i class="icon-user"></i>Account Information </a>
                  </li>
                  <li class="">
                    <a href="/account/notifications">
                      <i class="icon-alarm-ringing"></i>Notifications </a>
                  </li>
                  <li class="">
                    <a href="/account/invoices">
                      <i class="icon-papers"></i>Invoices </a>
                  </li> 
                  <li>
                    <a href="/account/my-account">
                      <i class="icon-power-switch"></i>Logout </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
                    </div>


                    <AdminOnlyRoute>
                    <div className={styles.content}>
                        <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="all-products" element={<ViewProducts />} />
                        <Route path="add-product" element={<AddProduct />} /> 
                        <Route path="orders" element={<Orders />} />
                            
                        </Routes>
                    </div>
                    </AdminOnlyRoute>
                    </div>
    )
}

export default Account;