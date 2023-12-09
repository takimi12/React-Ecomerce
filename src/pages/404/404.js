import React from 'react';
import styles from './404.module.scss';
import error from '../../assets/img/404/404.jpg';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
        <div className={styles.content}>
          <figure>
            <img src={error} alt="" />
            <h3>Ohh! Page not found</h3>
            <p>
              It seems we can't find what you're looking for. Perhaps searching can help or go back to
              <a href="/"> Homepage</a>
            </p>
          </figure>
        </div>
      </div>
  );
};

export default NotFoundPage;
