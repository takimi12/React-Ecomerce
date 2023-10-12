import styles from "./Loader.module.scss";
import loaderImg from "../../assets/img/loader.gif";
import  ReactDOM from 'react-dom';
import React from "react";



const loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loaderImg} alt="Loading..."/>
        </div>
        </div>,
        document.getElementById("loader")
  )
}

export default loader