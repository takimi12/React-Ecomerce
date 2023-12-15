import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDoc, Timestamp } from "firebase/firestore";
import { doc } from "firebase/firestore";
import Loader from "../../../components/loader/Loader";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import { selectUserID } from "../../../redux/slice/authslice";
import {
  selectOrderHistory,
  STORE_ORDERS,
} from "../../../redux/slice/orderslice";
import styles from "./Orders.module.scss";
import OrderDetails from "../orderDetails/OrderDetails";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";

const ChangeOrderStatus = ({ order, id }) => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const editOrder = async (e, id) => {
    e.preventDefault();
    setIsLoading(true);

  

    const orderConfig = {
      userID: order.userID,
      userEmail: order.userEmail,
      orderDate: order.orderDate,
      orderTime: order.orderTime,
      orderAmount: order.orderAmount,
      orderStatus: status,
      cartItems: order.cartItems,
      shippingAddress: order.shippingAddress,
      createdAt: order.createdAt,
      editedAt: Timestamp.now().toDate(),
    };

    try {
      // Assuming db is your Firestore instance
      await setDoc(doc(db, "orders", id), orderConfig);

      setIsLoading(false);
      // Assuming toast is your notification system
      toast.success("Order status changes successfully");

    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
   
      <div className={styles.status}>
        <h4>Update Status</h4>
        <form onSubmit={(e) => editOrder(e, id)}>
          <span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                -- Choose one --
              </option>
              <option value="Order Placed...">Order Placed...</option>
              <option value="Processing...">Processing...</option>
              <option value="Shipped...">Shipped...</option>
              <option value="Delivered">Delivered</option>
            </select>
          </span>
          <span>
            <button type="submit" className="--btn --btn-primary">
              Update Status
            </button>
          </span>
        </form>
      </div>
    </>
  );
};

const OrderHistory = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const orders = useSelector(selectOrderHistory);
  const userID = useSelector(selectUserID);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [dispatch, data]);



  const filteredOrders = orders.filter((order) => order.userID === userID);

  return (
    <>
      <section>
        <div className={`container ${styles.order}`}>
          <h2>Your Order History</h2>
          <p>
            Open an order to leave a <b>Product Review</b>
          </p>
          <br />
          <>
            {isLoading && <Loader />}
            <div className={styles.table}>
              {filteredOrders.length === 0 ? (
                <p>No order found</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>s/n</th>
                      <th>Date</th>
                      <th>Order ID</th>
                      <th>Order Amount</th>
                      <th>Order Status</th>
                      <th>Change  Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => {
                      const {
                        id,
                        orderDate,
                        orderTime,
                        orderAmount,
                        orderStatus,
                      } = order;
                      return (
                        <>

                        <tr key={id} >
                          <td>{index + 1}</td>
                          <td>
                            {orderDate} at {orderTime}
                          </td>
                          <td>{id}</td>
                          <td>
                            {"$"}
                            {orderAmount}
                          </td>
                          <td>
                            <p
                              className={
                                orderStatus !== "Delivered"
                                  ? `${styles.pending}`
                                  : `${styles.delivered}`
                              }
                            >
                              {orderStatus}
                            </p>
                          </td>
                     
  <td>  <ChangeOrderStatus order={order} id={id} />
 </td>
                        </tr> 

                         
                                                    </>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
