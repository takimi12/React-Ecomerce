import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import { selectEmail, selectUserID } from "../../../redux/slice/authslice";
import {
  selectOrderHistory,
  STORE_ORDERS,
} from "../../../redux/slice/orderslice";
import styles from "./Orders.module.scss";
import ChangeOrderStatus from "./ChangeOrderStatus";

const OrderHistory = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const [AdminOnly, setAdminOnly] = useState(false);  
  const orders = useSelector(selectOrderHistory);
  const userID = useSelector(selectUserID);
  const email = useSelector(selectEmail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [dispatch, data]);



  let filteredOrders;

  useEffect(() => {
    if (email === "test@gmail.com") {
      setAdminOnly(true);
    }
  }, [email]);
  
  
  if (email === "test@gmail.com") {
     filteredOrders = orders;

  } else {
     filteredOrders = orders.filter((order) => order.userID === userID);
  }



  return (
    <>
      <div>
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
                      {AdminOnly &&
                      <th>Change  Status</th>}
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
                          <Link to={`/orders-details/${id}`}>
                          <td>{id}</td>
                          </Link>
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
                     
{AdminOnly &&  <td>  <ChangeOrderStatus order={order} id={id}  /> </td>}
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
      </div>
    </>
  );
};

export default OrderHistory;
