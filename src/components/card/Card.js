import React from "react";
import styles from "./Card.module.scss"; // Upewnij się, że używasz odpowiedniego pliku

const Card = ({ children, cardClass }) => {
  return <>           
  <div className={styles['header--center']}>
  <div className={styles.container}>
    <div className={styles.card}>
        {children}
        </div>
        </div>
        </div>
        </>;
};

export default Card;
