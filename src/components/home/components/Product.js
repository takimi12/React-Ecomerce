import React from 'react';
import styles from './Product.module.scss';
import { IoBagCheckOutline, IoEyeOutline, IoBarChartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { ADD_TO_CART, ADD_TO_COMPARE, ADD_TO_WISHLIST, CALCULATE_TOTAL_QUANTITY } from '../../../redux/slice/cartslice';
import { useDispatch } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Product = ({ id, name, price,imageURL, cartQuantity }) => {

  const dispatch = useDispatch();



  const addToCart = (product) => {
    const { id, name, price, imageURL } = product;
    const actionPayload = { id, imageURL,name, price, cartQuantity: 1 };
  
    dispatch(ADD_TO_CART(actionPayload));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };
  
  const addToCompare = (product) => {
    const { id, name, price, imageURL } = product;
    const actionPayload = { id, imageURL,name, price, cartQuantity: 1 };
    dispatch(ADD_TO_COMPARE(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());

  };
  const addToWishlist = (product) => {
    const { id, name, price, imageURL } = product;
    const actionPayload = { id, imageURL,name, price, cartQuantity: 1 };
    dispatch(ADD_TO_WISHLIST(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());

  };

  return (
    <div className={styles.singleproduct__wrapper} id={`product-${id}`}>
      <div className={styles.inner}>
        <div className={styles.singleproduct__wraper__image}>
          <Link to={`/product-details/${id}`}>
          
          <img className={styles.image} src={imageURL} alt={`Produkt ${id}`} />
          </Link>
          <ul className={styles.listActions}>
            <li className={styles.list}>
              <a className={styles.anchor} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add To Cart" onClick={() => addToCart({ id, name, price, imageURL })}>
                <IoBagCheckOutline size={22} />
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.anchor} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View" >
                <IoEyeOutline size={22} />
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.anchor} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to wishlist" onClick={() => addToWishlist({id, imageURL,name, price, })}>
                <CiHeart size={22} />
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.anchor} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Compare" onClick={() => addToCompare({ id, imageURL,name, price, })}>
                <IoBarChartOutline size={22} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.singleProductWrapperText}>
          <div className={styles.store}> GLOBAL STORE </div>

          <a className={styles['singleproduct__wrapper__text--anchor']}>{name}</a>
          <div className={styles.psRating}>
            <span >
              <FaStar className={styles.FaStar}/>
              <FaStar className={styles.FaStar}/>
              <FaStar className={styles.FaStar}/>
              <FaStar className={styles.FaStar}/>
              <CiStar className={styles.Cistar}/>
            </span>
          </div>
          <h6 className={styles['singleproduct__wrapper__text--price']}>${price}</h6>
          <div className='singleproduct__wrapper__sold' ></div>
        </div>
      </div>
    </div>


  );
};

export default Product;
