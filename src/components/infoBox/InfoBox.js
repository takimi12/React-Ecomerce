import React from "react";
import styles from "./InfoBox.module.scss";

const InfoBox = ({  title, count, icon }) => {
  return (
    <div className={styles["info-box"]}>
        <h4>{title}</h4>
        <span>
          <h3>{count}</h3>
          {icon}
        </span>
    </div>
  );
};

export default InfoBox;