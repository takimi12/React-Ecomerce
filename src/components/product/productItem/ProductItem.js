import React from 'react';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ADD_TO_CART,
  ADD_TO_COMPARE,
  ADD_TO_WISHLIST,
  CALCULATE_TOTAL_QUANTITY,
} from '../../../redux/slice/cartslice';
import { IoBarChartOutline, IoBagCheckOutline, IoEyeOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import Card from '../../card/Card';

const ProductItem = ({ category, grid, id, name, price, desc, imageURL }) => {
  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      return text.substring(0, n).concat('...');
    }
    return text;
  };

  const addToCart = (product) => {
    const { id, name, price, imageURL } = product;
    const actionPayload = { id, name, price, imageURL, cartQuantity: 1 };

    dispatch(ADD_TO_CART(actionPayload));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  const addToCompare = (product) => {
    dispatch(ADD_TO_COMPARE(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  const addToWishlist = (product) => {
    dispatch(ADD_TO_WISHLIST(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  return (
    <>
      {grid ? (
       <Card>
       <div className={styles.card}>
         <Link to={`/product-details/${id}`}>
           <div className={styles.img}>
             <img className={styles.productItemImage} src={imageURL} alt={name} />
           </div>
         </Link>
         <div className={styles.content}>
           <div className={styles.details}>
             <p className={styles.category}>{category}</p>
             <h4 className={styles.productTitle}>{shortenText(name, 15)}</h4>
             <p className={styles.price}>{`$${price}`}</p>
             <ul className={styles.listActions}>
               <li>
                 <a
                   href="#!"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="Add To Cart"
                   onClick={() => addToCart({ id, name, price, imageURL })}
                 >
                   <IoBagCheckOutline size={22} />
                 </a>
               </li>
               <li>
                 <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                   <IoEyeOutline size={22} />
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="Add to wishlist"
                   onClick={() => addToWishlist({ id, name, price, imageURL })}
                 >
                   <CiHeart size={22} />
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="Compare"
                   onClick={() => addToCompare({ id, name, price, imageURL })}
                 >
                   <IoBarChartOutline size={22} />
                 </a>
               </li>
             </ul>
           </div>
           {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}
         </div>
       </div>
       </Card>
      ) : (

        <div className={styles.list}>
          <Link to={`/product-details/${id}`}>
            <div className={styles.img}>
              <img className={styles.productItemImage} src={imageURL} alt={name} />
            </div>
          </Link>
          <div className={styles.content}>
            <div className>
            <h4 className>{name}</h4>
              <p className>{category}</p>
               <p className>{desc}</p>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.priceParent}>
              <p className={styles.price}>{`$${price}`}</p>
                 <div>
                 <a
                   href="#!"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="Add To Cart"
                   onClick={() => addToCart({ id, name, price, imageURL })}
                 >
                  <button className='--btn'>
                Add to cart
                  </button>
                 </a>
                 </div>
                 <div className={styles.ctaparent}>
               <a
                   href="#"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="Add to wishlist"
                   onClick={() => addToWishlist({ id, name, price, imageURL })}
                 >
                   <CiHeart size={16} />
                   wishlist
                 </a>
                 <a
                   href="#"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="Compare"
                   onClick={() => addToCompare({ id, name, price, imageURL })}
                 >
                   <IoBarChartOutline size={16} />
                   Compare
                 </a>
                 </div>
            </div>


  </div>
        </div>

      )}
    </>
  );
};

export default ProductItem;
