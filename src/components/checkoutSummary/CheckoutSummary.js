import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} 
from "../../redux/slice/cartslice";
import Card from "../card/Card";
import styles from "./CheckoutSummary.module.scss";

import { useDispatch, useSelector } from 'react-redux';

const CheckoutSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const dispatch = useDispatch(); 


  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [cartItems, dispatch]);



  return (
    <div>
 
      <div>
        {cartItems.lenght === 0 ? (
          <>
            <p>No item in your cart.</p>
            <button className="--btn">
              <Link to="/#products">Back To Shop</Link>
            </button>
          </>
        ) : (
          <div>
            
            <div className={styles.summary}>
            <h3>Checkout Summary</h3>
            {cartItems.map((item, index) => {
              const { id, name, price, cartQuantity } = item;
              return (
                  <div className={styles.summaryInner}>
                  <h4>Product: {name}</h4>
                  <p>Quantity: {cartQuantity}</p>
                  <p>Set price: {price * cartQuantity}</p>
                  </div>
              );
            })}
            <p>
              <b className={styles.cartTotalQuantity}>{`Cart item(s): ${cartTotalQuantity}`}</b>
            </p>
            <div className={styles.text}>
              <h4>Total:</h4>
              <h3>{cartTotalAmount.toFixed(2)}</h3>
            </div>
            </div>
       
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSummary;