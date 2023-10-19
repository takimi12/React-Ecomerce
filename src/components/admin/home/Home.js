import React, { useEffect } from "react";
import InfoBox from "../../infoBox/InfoBox";
import styles from "./Home.module.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4, BsClipboardData } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";


//icons
const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;

const productIcon = <BsCart4 size={30} color="#b624ff" />;

const ordersIcon = <BsClipboardData size={30} color="#b624ff" />;



const Home = () => {
 

  return (
    <div className={styles.home}>
      <h2>Admin Home</h2>
      <div className={styles["info-box"]}>
        <InfoBox
          cardClass={`${styles.card} ${styles.card1}`}
          title={"Earnings"}
          count={"188"}
          icon={earningIcon}
        />
        <InfoBox
          cardClass={`${styles.card} ${styles.card2}`}
          title={"Products"}
          count={"78"}
          icon={productIcon}
        />
        <InfoBox
          cardClass={`${styles.card} ${styles.card3}`}
          title={"Orders"}
          count={"50"}
          icon={ordersIcon}
        />
      </div>
      
    </div>
  );
};

export default Home;