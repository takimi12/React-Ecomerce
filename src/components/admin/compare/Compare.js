import React, { useEffect, useState } from 'react';
import styles from "./Compare.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, 
  CALCULATE_SUBTOTAL, 
  CALCULATE_TOTAL_QUANTITY,
   REMOVE_FROM_COMPARE, 
   SAVE_URL,
    selectCartItems, 
    selectCartTotalAmount,
     selectCartTotalQuantity, 
     selectCompareItems} from '../../../redux/slice/cartslice';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/slice/authslice';




const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotalAmount = useSelector(selectCartTotalAmount);
    const cartTotalQuantity = useSelector(selectCartTotalQuantity);
    const dispatch = useDispatch(); 
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [product, setProduct] = useState(null);
    

const navigate = useNavigate();

    const removeFromCompare = (cart) => {
        dispatch(REMOVE_FROM_COMPARE(cart));
    };
    const addToCart = (product) => {
        const { id, name, price, imageURL } = product;
        const actionPayload = { id, name, price, imageURL, cartQuantity: 1 };
      
        dispatch(ADD_TO_CART(actionPayload));
        dispatch(CALCULATE_TOTAL_QUANTITY());
      };
      
    useEffect(() => {
        dispatch(CALCULATE_SUBTOTAL());
        dispatch(CALCULATE_TOTAL_QUANTITY());
        dispatch(SAVE_URL(""));
    }, [cartItems, dispatch]);


    const compareItems = useSelector(selectCompareItems);

    console.log(compareItems);


    const url = window.location.href;




  return(
  <section>
    <div className={` ${styles.table}`}>
        <h2 className={styles.mainHeading}>Compare Product</h2>
        {compareItems.length === 0 ? (
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
                            <th>Remove</th>
                            <th>Buy</th>
                        </tr>
                </thead>
                <tbody>
                    {compareItems.map((cart, index) => {
                        const {id, name, price,imageURL, } = cart;
                        return (
                            <tr key={id}>
                                     <Link to={`/product-details/${id}`} className={styles.link}> 
                                <td>
                                    <p>
                                        <b>
                                        {name}
                                        </b>
                                    </p>
                                    <img src={imageURL} alt={name} style={{width:"100px"}} />
                                </td>
                                </Link>
                                <td>{price}</td>
                              
                             
                                <td className={styles.icons}>
                                    <FaTrashAlt size={30} color="red"
                                    onClick={() => removeFromCompare(cart)}
                                    />
                                </td>
                                <td>
                                <button className={`--btn ${styles.btn}`}
            onClick={() => addToCart(cart)}
            >ADD TO CART</button>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
          
        </>
        )}
 </div>
</section>
  )
};


export default Cart;