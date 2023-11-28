import styles from "./ProductDetails.module.scss";
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../../firebase/config';
import spinnerImg from "../../../assets/img/spinner.jpg";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY, DECREASE_CART, selectCartItems } from "../../../redux/slice/cartslice";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import Card from "../../card/Card";
import StarsRating from "react-star-rate";



const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const {document} = useFetchDocument('products', id);
  const {data} = useFetchCollection("reviews");
  const filteredReviews = data.filter((review) => review.productID === id);

  const cart = cartItems.find((cart) => cart.id === id);

  const isCartAdded = cartItems.findIndex((cart) =>{
    return cart.id === id;
  });

  useEffect(() => {
    setProduct(document)
   }, [document]);

   const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY(product));
   };

   const decreaseCart = (product) => {
    dispatch(DECREASE_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY(product));
   };

  

  return (
    <section>
      <div className={`container ${styles.product} `}>
        <h2>ProductDetails</h2>
        <div>
          <Link to="/#products">
          &larr; Back To Products
          </Link>
        </div>
        {product === null ? (
            <img src={spinnerImg} style={{width:"50px"}} alt="Loading..." />
        ) : (
          <>
          <div className={styles.details}>
            <div className={styles.img}>
              <img src={product.imageURL} alt={product.name} />
            </div>
            <div className={styles.content}>
            <h3>{product.name}</h3>
            <p className={styles.price}>{`$${product.price}`}</p>
            <p>{product.desc}</p>
            <p>
              <b>SKU</b>{product.id}
            </p>
            <p>
              <b>Brand</b>{product.brand}
            </p>
            <div className={styles.count}>
              {isCartAdded < 0 ? null : (
                <>
                  <button className="--btn"
              onClick={() => decreaseCart(product)}
              >-1</button>
              <p>
                <b>
                  {cart.cartQuantity}
                </b>
              </p>
              <button className="--btn"
              onClick={() =>addToCart(product)}
              >+1</button>
                </>
              )}
            
            </div>
            <button className="--btn --btn-danger"
            onClick={() => addToCart(product)}
            >ADD TO CART</button>
          </div>
          </div>
          </>
        )}
    <Card cardClass={styles.card}>
          <h3>Product Reviews</h3>
          <div>
            {filteredReviews.length === 0 ? (
              <p>There are no reviews for this product yet.</p>
            ) : (
              <>
                {filteredReviews.map((item, index) => {
                  const { rate, review, reviewDate, userName } = item;
                  return (
                    <div key={index} className={styles.review}>
                      <StarsRating value={rate} />
                      <p>{review}</p>
                      <span>
                        <b>{reviewDate}</b>
                      </span>
                      <br />
                      <span>
                        <b>by: {userName}</b>
                      </span>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};




export default ProductDetails;