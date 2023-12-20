import React, { useEffect, useState } from "react";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import styles from "./OrderDetails.module.scss";
import spinnerImg from "../../../assets/img/spinner.jpg";
import { Link, useParams } from "react-router-dom";
import ChangeOrderStatus from "../ChangeOrderStatus/ChangeOrderStatus";
import { selectOrderHistory, STORE_ORDERS } from "../../../redux/slice/orderslice";


const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);


  useEffect(() => {
    setOrder(document);
  }, [document]);


  

  return (
    <>
      <div className={styles.table}>
        <h2>Order Details</h2>
        <div className={styles.btnParent}>
          <Link to="/account/orders"><button className="--btn">&larr; Back To Orders</button></Link>
        </div>
        <br />
        {order === null ? (
          <img src={spinnerImg} alt="Loading..." style={{ width: "50px" }} />
        ) : (
          <>

            <p>
              <b className={styles.orderStatus}>Order Amount</b> ${order.orderAmount}
            </p>
            <p>
              <b className={styles.orderStatus}>Order Status</b> {order.orderStatus}
            </p>
            <p>
              <b className={styles.orderStatus}>Shipping Address</b>
              <br />
              Address: {order.shippingAddress.line1},
              {order.shippingAddress.line2}, {order.shippingAddress.city}
              <br />
              State: {order.shippingAddress.state}
              <br />
              Country: {order.shippingAddress.country}
            </p>
            <br />
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems.map((cart, index) => {
                  const { id, name, price, imageURL, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>
                        <b>{index + 1}</b>
                      </td>
                      <td>
                        <p>
                          <b>{name}</b>
                        </p>
                        <img
                          src={imageURL}
                          alt={name}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>{price}</td>
                      <td>{cartQuantity}</td>
                      <td>{(price * cartQuantity).toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}

      </div>
    </>
  );
};

export default OrderDetails;