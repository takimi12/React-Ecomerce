import { Link } from "react-router-dom";
import styles from "./CheckoutSucces.module.scss"

const CheckoutSuccess = () => {
  return (
    <section className={styles.checkoutSucces}>
      <div className={styles.container}>
        <h2>Checkout Successful</h2>
        <p>Thank you for your purchase</p>
        <br />

        <button className="--btn --btn-primary">
          <Link to="/account/orders">View Order Status</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;