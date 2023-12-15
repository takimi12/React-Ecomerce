import { Timestamp, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/config";
import { toast } from "react-toastify";


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

        <div className>
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

  export default  ChangeOrderStatus;