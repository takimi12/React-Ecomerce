import React, { useEffect, useState } from 'react';
import styles from "./CartHover.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, CALCULATE_SUBTOTAL, CALCULATE_TOTAL_QUANTITY, CLEAR_CART, DECREASE_CART, REMOVE_FROM_CART, SAVE_URL, selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from '../../../redux/slice/cartslice';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/slice/authslice';

const Cart = ({ active }) => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const [isCartHovered, setIsCartHovered] = useState(false);


  const handleCartHover = () => {
    if (active === true) {
      setIsCartHovered(true);
    } else {
      setIsCartHovered(false);
    }
  };
  const handleCartLeave = () => {
    setIsCartHovered(false);
  };

  const increaseCart = (cart) => {
    dispatch(ADD_TO_CART({ ...cart, cartQuantity: cart.cartQuantity + 1 }));
  };

  const decreaseCart = (cart) => {
    dispatch(DECREASE_CART({ ...cart, cartQuantity: cart.cartQuantity - 1 }));
  };

  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CART(cart));
  };

  const clearCart = () => {
    dispatch(CLEAR_CART());
  };

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [cartItems, dispatch]);

  const url = window.location.href;

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout-details");
    } else {
      dispatch(SAVE_URL(url));
      navigate("/login");
    }
  };

  return (
    <>
      <div
        onMouseEnter={handleCartHover}
        onMouseLeave={handleCartLeave}
        className={`${isCartHovered || active ? styles.active : styles.cartBox}`}
      >
        {cartItems.length === 0 ? (
          <>
            <p>Your cart is currently empty!</p>
            <br />
            <div>
              <Link to="/#products">&larr; Continue shopping</Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.productCartContent}>
              {cartItems.map((cart) => (
                <div key={cart.id} className={styles.mainContent}>
                  <div className={styles.topContent}>
                    <div className={styles.topContentInner}>
                      <img src={cart.imageURL} alt={cart.name} style={{ width: "100px" }} />
                    </div>
                    <div className={styles.cartCount}>
                      <Link className={styles.cartCountName} to={`/product-details/${cart.id}`}>
                        {cart.name}
                      </Link>
                      <div className={styles.cartCountInner}>
                        <div className={styles.cartCountSet}>
                          <button onClick={() => decreaseCart(cart)}>-</button>
                          <p>
                            <b>{cart.cartQuantity}</b>
                          </p>
                          <button onClick={() => increaseCart(cart)}>+</button>
                        </div>
                        <FaTrashAlt
                          size={19}
                          color="red"
                          onClick={() => removeFromCart(cart)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bottomCheckout}>
              <div className={styles.bottomCheckoutWrapper}>
                <h4>Total</h4>
                <h3>{`$${cartTotalAmount.toFixed(2)}`}</h3>
              </div>
              <div className={styles.bottomCheckoutBtn}>
                <Link to="/cart" className={`${'--btn --btn-primary --btn-block'} ${styles.button}`}>
                  View Cart
                </Link>
                <button
                  className={`${'--btn --btn-primary --btn-block'} ${styles.button}`}
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
