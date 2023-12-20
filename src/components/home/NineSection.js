import React, { useState } from 'react';
import { selectProducts } from '../../redux/slice/productslice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NineSection.module.scss';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const EightSection = () => {
  const [activeTab, setActiveTab] = useState('Hot-New-Arrival');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const products = useSelector(selectProducts);

  // Determine the starting index based on the active tab
  let startIndex;
  switch (activeTab) {
    case 'Hot-New-Arrival':
      startIndex = 0;
      break;
    case 'Collection 1':
      startIndex = 8;
      break;
    case 'Collection 2':
      startIndex = 16;
      break;
    case 'Collection 3':
      startIndex = 24;
      break;
    case 'View All':
      startIndex = 0; // Reset startIndex for "View All"
      break;
    default:
      startIndex = 0;
  }

  // Slice the products array based on the starting index and show only 8 products
  const displayedProducts = activeTab === 'View All' ? products : products.slice(startIndex, startIndex + 8);

  return (
    <section className={styles.sectionTitle}>
      <div className={styles.TopInfo}>
        <div className={styles.leftSide}>
          <h3 className={styles.Maintitle} >Hot New Arrivals</h3>
        </div>
        <div className={styles.rightSide}>

  <h3 className={`${styles.titleCollection} ${activeTab === 'Collection 1' ? styles.active : ''}`} onClick={() => handleTabClick('Collection 1')}>
    Collection 1
  </h3>
  <h3 className={`${styles.titleCollection} ${activeTab === 'Collection 2' ? styles.active : ''}`} onClick={() => handleTabClick('Collection 2')}>
    Collection 2
  </h3>
  <h3 className={`${styles.titleCollection} ${activeTab === 'Collection 3' ? styles.active : ''}`} onClick={() => handleTabClick('Collection 3')}>
    Collection 3
  </h3>
  <h3 className={`${styles.titleCollection} ${activeTab === 'View All' ? styles.active : ''}`} onClick={() => handleTabClick('View All')}>
    View All
  </h3>
</div>
      </div>
      <div>
        <div className={styles.productContainer}>
          {displayedProducts.map((product) => (
            <Link key={product.id} to={`/product-details/${product.id}`} className={styles.productLink}>
              <div className={styles.product}>
                <div className={styles.productURL}>
                  <img src={product.imageURL} alt={product.name} />
                </div>
            
                <div className={styles.productInfo}>
                  <Link to={`/product-details/${product.id}`}>
                    <h4 className={styles.title}>{product.name}</h4>
                  </Link>
                  <div className={styles.psRating}>
            <span>
              <FaStar className={styles.FaStar} />
              <FaStar className={styles.FaStar} />
              <FaStar className={styles.FaStar} />
              <FaStar className={styles.FaStar} />
              <CiStar className={styles.Cistar} />
            </span>
          </div>
                  <p className={styles.price}>Price: ${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EightSection;
