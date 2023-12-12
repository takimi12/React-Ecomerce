import React from 'react';
import styles from './ProductPopUp.module.scss';
import Card from "../../card/Card";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART,  ADD_TO_COMPARE,  ADD_TO_WISHLIST,  CALCULATE_TOTAL_QUANTITY } from '../../../redux/slice/cartslice';
import { IoBarChartOutline, IoBagCheckOutline, IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const ProductItem = () => {



  return (
 
      <div className={styles.card}>
        <Link to={`/product-details/`}>
          <div className={styles.img}>
            <img className={styles.productItemImage}  />
          </div>
        </Link>
        <div className={styles.content}>
          <div className={styles.details}>
            <p className={styles.category}></p>
            <h4 className={styles.productTitle}>SSSSSSSSSSSSSSSSS</h4>
            <p className={styles.price}></p>
           
          </div>

        </div>
      </div>

  );
};

export default ProductItem;
