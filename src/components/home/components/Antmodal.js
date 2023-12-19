// QuickViewModal.js
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import styles from './AntModal.module.scss';
import { FaFacebook, FaGooglePlus, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, 
    CALCULATE_SUBTOTAL, 
    CALCULATE_TOTAL_QUANTITY,
     CLEAR_CART, DECREASE_CART, 
     REMOVE_FROM_CART, 
     SAVE_URL,
      selectCartItems, 
      selectCartTotalAmount,
       selectCartTotalQuantity } from '../../../redux/slice/cartslice';
import { ToastContainer, toast } from 'react-toastify';


const QuickViewModal = ({ isModalVisible, handleOk, handleCancel, id, name, price, imageURL, cartQuantity, key, desc,brand, category }) => {

    const cartItems = useSelector(selectCartItems);
    const cartTotalAmount = useSelector(selectCartTotalAmount);
    const cartTotalQuantity = useSelector(selectCartTotalQuantity);
    const dispatch = useDispatch(); 
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    


    const addToCart = () => {
        const updatedProduct = { id, name, price, imageURL, cartQuantity: quantity };
        dispatch(ADD_TO_CART(updatedProduct));
        dispatch(CALCULATE_TOTAL_QUANTITY(updatedProduct));
        setQuantity(1); // Ustaw quantity na 1 po dodaniu do koszyka
      };
    
      const handleDecrease = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    
      const handleIncrease = () => {
        setQuantity(quantity + 1);
      };

    

    
  return (
    <>
     <Modal className={styles.Modal}
     visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
         <ToastContainer />

        <div className={styles.row}>
            <div className={styles.imgParent}>
            <img src={imageURL} alt={name} style={{ width: "100%" }} />
            </div>
            <div className={styles.content}>
            <div className={styles.topText}>
            <h3 className={styles.mainHeading}>{name}</h3>
            <p className={styles.paragraph}>Brand:{brand}</p>
            </div>



            <div className={styles.medium}>
       
                
            <p className={styles.price}>{`$${price}`}</p>
            <p>Sold By:</p>
            </div>
            <div className={styles.extraInfo}>
                  <Link> Report Abuse</Link>
                  <p>SKU: {id}</p>
                  <p>
                    <b>Brand:</b>
                    {brand}
                  </p>
                  <p>Categories:{category}</p>
                  <p>Tags: <i>No tag.</i> </p>
                </div>
                
                
                <div className={styles.count}>
                    
                    <button className="" onClick={handleDecrease}>
                      -
                    </button>
                    <p>{quantity}</p>
                    <button className="" onClick={handleIncrease}>
                      +
                    </button>
                    <div className={styles.buttonWrapper}>
                    <button className="--btn " onClick={addToCart}>
                      ADD TO CART
                    </button>
                  </div>
                  </div>
                
            <div className={styles.socialMedia}>
                    <a className="facebook" href="#">
                      <FaFacebook color="#1877f2" size={30} />
                    </a>
                    <a className="twitter" href="#">
                      <FaTwitter color="#1da1f2" size={30} />
                    </a>
                    <a className="google" href="#">
                      <FaGooglePlus color="#dd4b39" size={30} />
                    </a>
                    <a className="linkedin" href="#">
                      <FaLinkedin color="#0077b5" size={30} />
                    </a>
                    <a className="instagram" href="#">
                      <FaInstagram color="#bc2a8d" size={30} />
                    </a>
                  </div>
 
            </div>
        </div>

    </Modal>
    </>
  );
};

export default QuickViewModal;
