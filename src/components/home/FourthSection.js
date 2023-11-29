import React from 'react';
import { Link } from 'react-router-dom';
import obrazek1 from '../../assets/img/collection/home-1/1.jpg';
import obrazek2 from '../../assets/img/collection/home-1/2.jpg';
import obrazek3 from '../../assets/img/collection/home-1/3.jpg';
import styles from './FourthSection.module.scss';

const FourthSection = () => {
  const imagePaths = [obrazek1, obrazek2, obrazek3];



  return (
    <section className={styles.FourthSection}>
    
      <div className={styles.wrapper}>
        <div className={styles.wraperItem}>
          {imagePaths.map((obrazek, index) => (
            <div key={index} className={styles.item}>
              <Link className="FourthSection__link ps-collection" to={`/shop/${index + 1}`}>
                <img className={styles.image} src={obrazek} alt={`martfury ${index + 1}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
