import React from 'react';
import styles from './ReviewContent.module.scss';

const ReviewItem = ({ review, reviewDate, userName }) => {
  return (
    <div className={styles.reviewItemContainer}>
      <div className={styles.userInfo}>
        <p className={styles.label}>Author:</p>
        <b className={styles.userName}>{userName}</b>
      </div>
      <div className={styles.userInfo}>
        <p className={styles.label}>Review Date:</p>
        <span className={styles.reviewDate}>{reviewDate}</span>
      </div>
      <div className={styles.reviewContent}>
        <p className={styles.label}>Content Review:</p>
        <p className={styles.reviewText}>{review}</p>
      </div>
    </div>
  );
};

export default ReviewItem;