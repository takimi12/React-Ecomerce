import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { LuRotate3D } from "react-icons/lu";
import { FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin, FaInstagram, FaNetworkWired, FaReceipt, FaCreditCard, FaStore } from 'react-icons/fa';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY, DECREASE_CART, selectCartItems } from '../../../redux/slice/cartslice';
import useFetchDocument from '../../../customHooks/useFetchDocument';
import useFetchCollection from '../../../customHooks/useFetchCollection';
import Card from '../../card/Card';
import StarsRating from 'react-star-rate';
import ReviewProducts from '../../reviewProducts/ReviewProducts';
import ReviewComponent from '../../reviewProducts/ReviewComment';
import spinnerImg from '../../../assets/img/spinner.jpg';
import styles from './ProductDetails.module.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { document } = useFetchDocument('products', id);
  const { data } = useFetchCollection('reviews');
  const [activeTab, setActiveTab] = useState('description'); // Default active tab

  const filteredReviews = data.filter((review) => review.productID === id);

  useEffect(() => {
    setProduct(document);
  }, [document]);


  const opinionsCount = filteredReviews.length;

  useEffect(() => {
    setProduct(document);
  }, [document]);


  const addToCart = () => {
    const updatedProduct = { ...product, cartQuantity: quantity };
    dispatch(ADD_TO_CART(updatedProduct));
    dispatch(CALCULATE_TOTAL_QUANTITY(updatedProduct));
    toast.success(`${product.name} added to cart`, {
      position: 'top-left',
    });
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className={styles.section}>
      <div className={styles.leftSide}>
      <div className={styles.mainWrapper} >
        {product === null ? (
          <img src={spinnerImg} style={{ width: '50px' }} alt="Loading..." />
        ) : (
          <>
            <div className={styles.details}>
              <div className={styles.img}>
                <img src={product.imageURL} alt={product.name} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>{`$${product.price}`}</p>
                <p className={styles.desc}><i>No short description yet</i></p>

                <div className={styles.cartLogic}>
                  <div className={styles.count}>
                    <button className="" onClick={handleDecrease}>
                      -
                    </button>
                    <p>{quantity}</p>
                    <button className="" onClick={handleIncrease}>
                      +
                    </button>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <button className="--btn " onClick={addToCart}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className={styles.extraInfo}>
                  <Link> Report Abuse</Link>
                  <p>SKU: {product.id}</p>
                  <p>
                    <b>Brand:</b>
                    {product.brand}
                  </p>
                  <p>Categories:{product.category}</p>
                  <p>Tags: <i>No tag.</i> </p>

                  <div className={styles.socialMedia}>
                    <a className="facebook" href="#">
                      <FaFacebook color="#1877f2" size={25} />
                    </a>
                    <a className="twitter" href="#">
                      <FaTwitter color="#1da1f2" size={25} />
                    </a>
                    <a className="google" href="#">
                      <FaGooglePlus color="#dd4b39" size={25} />
                    </a>
                    <a className="linkedin" href="#">
                      <FaLinkedin color="#0077b5" size={25} />
                    </a>
                    <a className="instagram" href="#">
                      <FaInstagram color="#bc2a8d" size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
    
</div>
          </>
        )}
      </div>

      <div className={styles.tablist}>
        <h3 onClick={() => handleTabClick('description')} className={`${styles.tab} ${activeTab === 'description' ? styles.active : ''}`}>
          Description
        </h3>
        <h3 onClick={() => handleTabClick('specification')} className={`${styles.tab} ${activeTab === 'specification' ? styles.active : ''}`}>
          Specification
        </h3>
        <h3 onClick={() => handleTabClick('vendor')} className={`${styles.tab} ${activeTab === 'vendor' ? styles.active : ''}`}>
          Vendor
        </h3>
        <h3 onClick={() => handleTabClick('reviews')} className={`${styles.tab} ${activeTab === 'reviews' ? styles.active : ''}`}>
        <h3 onClick={() => handleTabClick('reviews')} className={`${styles.tab} ${activeTab === 'reviews' ? styles.active : ''}`}>
  Reviews {opinionsCount > 0 && (
    <React.Fragment>({opinionsCount})</React.Fragment>
  )}
</h3>
        </h3>
        <h3 onClick={() => handleTabClick('qna')} className={`${styles.tab} ${activeTab === 'qna' ? styles.active : ''}`}>
          Question and answer
        </h3>
        <h3 onClick={() => handleTabClick('offers')} className={`${styles.tab} ${activeTab === 'offers' ? styles.active : ''}`}>
          More offers
        </h3>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'description' && (
          <div>
            {product && <p>{product.desc}</p>}
          </div>
        )}
        {activeTab === 'specification' && (
          <div className={styles.specification}>
            
            <table className={styles.table}>
  <tbody>
    <tr>
      <td>Color</td>
      <td></td>
    </tr>
    <tr>
      <td>Style</td>
      <td></td>
    </tr>
    <tr>
      <td>Wireless</td>
      <td></td>
    </tr>
    <tr>
      <td>Dimensions</td>
      <td></td>
    </tr>
    <tr>
      <td>Weight</td>
      <td></td>
    </tr>
    <tr>
      <td>Battery Life</td>
      <td></td>
    </tr>
    <tr>
      <td>Bluetooth</td>
      <td></td>
    </tr>
  </tbody>
</table>

          </div>
        )}
        {activeTab === 'vendor' && (
          <div>
  <h4>GoPro</h4>
  <p>Digiworld US, New York’s no.1 online retailer was established 
    in May 2012 with the aim and vision to become the one-stop shop for 
    retail in New York with implementation of best practices both online</p>
  <a href="#">More Products from Gopro</a>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className={styles.reviewsContent}>
            <ReviewComponent reviews={filteredReviews} />
            <ReviewProducts />
          </div>
        )}
        {activeTab === 'qna' && (
          <div>
            <p>This conent will be filling later</p>
          </div>
        )}
        {activeTab === 'offers' && (
          <div>
            <p>Sorry no more offers available</p>
          </div>
        )}
      </div>
      </div>
      <div className={styles.rightSide}>
      <aside className={styles.asideOne}>
  <p><FaNetworkWired /> Shipping worldwide</p>
  <p><LuRotate3D /> Free 7-day return if eligible, so easy</p>
  <p><FaReceipt /> Supplier gives bills for this product</p>
  <p><FaCreditCard /> Pay online or when receiving goods</p>
</aside>
<aside className={styles.asideTwo}>
  <p>
    <FaStore /> Sell on Martfury? <Link to="/account/register">Register Now !</Link>
  </p>
</aside>
        </div>
    </section>
  );
};

export default ProductDetails;
