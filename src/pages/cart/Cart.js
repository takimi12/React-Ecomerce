import React, { useEffect } from 'react';
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, 
  CALCULATE_SUBTOTAL, 
  CALCULATE_TOTAL_QUANTITY,
   CLEAR_CART, DECREASE_CART, 
   REMOVE_FROM_CART, 
   SAVE_URL,
    selectCartItems, 
    selectCartTotalAmount,
     selectCartTotalQuantity } from '../../redux/slice/cartslice';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/slice/authslice';




const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotalAmount = useSelector(selectCartTotalAmount);
    const cartTotalQuantity = useSelector(selectCartTotalQuantity);
    const dispatch = useDispatch(); 
    const isLoggedIn = useSelector(selectIsLoggedIn);

const navigate = useNavigate();

    const increaseCart = (cart) => {
        dispatch(ADD_TO_CART(cart));
    };
    const decreaseCart = (cart) => {
        dispatch(DECREASE_CART(cart));
    };

    const removeFromCart = (cart) => {
        dispatch(REMOVE_FROM_CART(cart));
    };

    const ClearCart = () => {
        dispatch(CLEAR_CART());
    };


    useEffect(() => {
        dispatch(CALCULATE_SUBTOTAL());
        dispatch(CALCULATE_TOTAL_QUANTITY());
        dispatch(SAVE_URL(""));
    }, [cartItems, dispatch]);


    const url = window.location.href;


    const Checkout = () => {
        if (isLoggedIn) {
            navigate("/checkout-details");
        } else {
            dispatch(SAVE_URL(url));
            navigate("/login");
        }

    };


  return(
  <section>
    <div className={` ${styles.table}`}>
        <h2>Shopping Cart</h2>
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
            <table>
                <thead>
                        <tr>

                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                </thead>
                <tbody>
                    {cartItems.map((cart, index) => {
                        const {id, name, price,imageURL, cartQuantity} = cart;
                        return (
                            <tr key={id}>

                                <td>
                                    <p>
                                        <b>
                                        {name}
                                        </b>
                                    </p>
                                    <img src={imageURL} alt={name} style={{width:"100px"}} />
                                </td>
                                <td>{price}</td>
                                <td><div className={styles.count}>
                                    <button className='' onClick={() => decreaseCart(cart)}>-</button>
                                    <p>
                                        <b>{cartQuantity}</b>
                                    </p>
                                    <button className='' onClick={() => increaseCart(cart)}>+</button>
                                    </div></td>
                                <td>
                                    {(price *cartQuantity).toFixed(2)}
                                </td>
                                <td className={styles.icons}>
                                    <FaTrashAlt size={19} color="red"
                                    onClick={() => removeFromCart(cart)}
                                    />
                                </td>
                                <td></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className={styles.cartAction}>
              
                <div className={styles.action}>
                    <div>
                        <Link to="/#products">
                            &larr; Continue shopping
                        </Link>
                    </div>
                    <div>
                    <button className='--btn --btn-danger'
                onClick={ClearCart}
                >Clear Cart</button>
                    </div>
                    </div>
                    <br />
                    </div>
                    <div className={styles.summaryone}>
                    <div className={styles.checdkout}>

                        <div className={styles.text}>
                            <h4 className={styles.lighterText}>Subtotal:</h4>
                            <h3 className={styles.lighterSummary}> {`$${cartTotalAmount.toFixed(2)}`}</h3>
                        </div>
                        <div className={styles.details}>
                        {cartItems.map((cart, index) => {
                        const {id, name,  cartQuantity} = cart;
                        return (
                            <div key={id}>
                                <p>{`${name} x ${cartQuantity}`}</p>
                            </div>
                        )
                    }
                    )}
                    </div>
                    <div className={styles.text}>
                       <h4 className={styles.strongerText}>Total </h4>  <h3 className={styles.strongerSummary}>{`$${cartTotalAmount.toFixed(2)}`}</h3>
                       </div>
                       
                </div>
                <button className={`${'--btn --btn-primary --btn-block'} ${styles.button}`}
                        onClick={Checkout}
                        >Checkout</button>
                </div>
          
        </>
        )}
 </div>
</section>
  )
};


export default Cart;