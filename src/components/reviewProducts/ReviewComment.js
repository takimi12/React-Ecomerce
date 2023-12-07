// ReviewComponent.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './ReviewComment.module.scss';

const ReviewComponent = ({ reviews }) => {
  const calculateAverageRating = () => {
    if (reviews.length === 0) {
      return { averageRating: 0, totalVotes: 0 };
    }

    const totalRating = reviews.reduce((acc, item) => acc + item.rate, 0);
    const averageRating = totalRating / reviews.length;



    return { averageRating, totalVotes: reviews.length };
  };

  const calculatePercentage = (rating) => {
    const votesForRating = reviews.filter((item) => Math.round(item.rate) === rating).length;
    return ((votesForRating / reviews.length) * 100).toFixed(2);
  };

  const { averageRating, totalVotes } = calculateAverageRating();

  const starList = [1, 2, 3, 4, 5];

  return (
    <div className={styles.reviewContainer}>
  
    <div className={styles.averageRating}>
        <div className={styles.overageInner}>
        <span className={styles.overageRating}>{averageRating}</span>
          
          <div>{starList.map((rating) => (
            <FaStar key={rating} className={styles.starIcon} />
          ))}
                  <p>({totalVotes} votes)</p>
          </div>
        </div>

      </div>

      <div>
        {reviews.length === 0 ? (
          <p>There are no reviews for this product yet.</p>
        ) : (
          <>
            {starList.map((rating) => (
            <div className={styles.starParent}>
                <div className={styles.widthParent}>
                    <div className={styles.starParent}>
               <p>{rating}</p>
               <span>Star</span>
                </div>
                <div className={styles.width}>
                </div>
                </div>
              <p key={rating}>
               {calculatePercentage(rating)}% 
              </p>
              </div>
            ))}
            {reviews.map((item, index) => {
              const { rate, review, reviewDate, userName } = item;
              const roundedRate = Math.round(rate);
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;
