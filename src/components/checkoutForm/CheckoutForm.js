import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import styles from "./CheckoutForm.module.scss";
import CheckoutSummary from "../checkoutSummary/CheckoutSummary";
import spinnerImg from "../../assets/img/spinner.jpg"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectUserID } from "../../redux/slice/authslice";
import { CLEAR_CART, selectCartItems, selectCartTotalAmount } from "../../redux/slice/cartslice";
import { selectShippingAddress } from "../../redux/slice/checkoutSlice";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";



const CheckoutForm = () => {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

const dispatch = useDispatch();
const navigate = useNavigate();

const userID = useSelector(selectUserID);
const userEmail = useSelector(selectEmail);
const cartItems = useSelector(selectCartItems);
const cartTotalAmount = useSelector(selectCartTotalAmount);
const shippingAddress = useSelector(selectShippingAddress);


  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const saveOrder = () => {
    const today = new Date ()
    const date = today.toDateString()
    const time = today.toLocaleTimeString()
    const orderConfig = {
        userID,
        userEmail,
        orderDate:date,
        orderTime:time,
        orderAmount:cartTotalAmount,
        orderStatus:"Order Placed...",
        cartItems,
        shippingAddress,
        createdAt: Timestamp.now().toDate()

    }


    try {
       addDoc(collection(db, "orders"), orderConfig);
      dispatch(CLEAR_CART());
       toast.success("Order Saved");
       navigate("/checkout-success");
    } catch (error) {

      toast.error(error.message);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

  

    const confirmPayment = await stripe
    .confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/checkout-success",
      },
      redirect: "if_required"
    })
    .then((result) => {
        if (result.error){
            toast.error(result.error.message)
            setMessage(result.error.message)
            return;
        }
        if (result.paymentIntent){
            if (result.paymentIntent.status === "succeeded"){
                setIsLoading(false)
                toast.success("Payment Successfull")
                saveOrder()
            }
        } 
    });


    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <section className={styles.sectionCheckout}>
      <div className={`container ${styles.container}` }>
        <h2 className={styles.mainHeading}> Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <CheckoutSummary />
            </div>
            <div className={styles.stripeCheckout}>

               <PaymentElement id={styles["payment-element"]} />
      <button
       disabled={isLoading || !stripe || !elements} 
       id="submit"
       className={`${styles["payment-button"]} --btn`}>
        <span id="button-text">
          {isLoading ? (<img 
          src={spinnerImg} 
          style={{width: "20px", height: "20px"}}
          alt="Loading..." /> ): "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id={styles["payment-message"]}>{message}</div>}
                
            </div>
        </form>

      </div>
    </section>

  );
}

export default CheckoutForm;