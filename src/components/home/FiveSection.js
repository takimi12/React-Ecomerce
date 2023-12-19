import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './FiveSection.module.scss';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/slice/productslice';

const HomeFivethSection = () => {
  const products = useSelector(selectProducts);


  // Create a map to store the first product for each category
  const categoryMap = new Map();

  // Loop through products to find the first product for each category
  products.forEach(product => {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, product);
    }
  });

  // Convert the map values to an array
  const topCategories = Array.from(categoryMap.values());

  return (
    <section className={styles.FiveSection}>
      <div className={styles.fiveSectionContainer}>
        <h3>Top categories of the month</h3>
        <div className={styles.row}>
          {topCategories.map(category => (
            <div key={category.id} className={styles.item}>
              <div className={styles.wraper}>
                <Link to={`/shop`} className="ps-block__overlay">
                  <img  className={styles.imageURL}src={category.imageURL} alt={category.name} />
                  <p>{category.category}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFivethSection;
