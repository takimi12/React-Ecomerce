import React from 'react';
import { FaRocket, FaSync, FaCreditCard,  FaGift } from 'react-icons/fa';
import { IoChatbubble } from "react-icons/io5";
import styles from './SecondSection.module.scss';

const SecondSection = () => (
  <section className={styles.HomeSecondSection}>
    <div className={styles.style}>
      <div className={styles.item}>
        <div className={styles.left}>
          <FaRocket className={styles.icon} />
        </div>
        <div className={styles.right}>
          <h4>Free Delivery</h4>
          <p>For all orders over $99</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.left}>
          <FaSync className={styles.icon} />
        </div>
        <div className={styles.right}>
          <h4>90 Days Return</h4>
          <p>If goods have problems</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.left}>
          <FaCreditCard className={styles.icon} />
        </div>
        <div className={styles.right}>
          <h4>Secure Payment</h4>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.left}>
            <IoChatbubble className={styles.icon} />
        </div>
        <div className={styles.right}>
          <h4>24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.left}>
          <FaGift className={styles.icon} />
        </div>
        <div className={styles.right}>
          <h4>Gift Service</h4>
          <p>Support gift service</p>
        </div>
      </div>
    </div>
  </section>
);

export default SecondSection;
