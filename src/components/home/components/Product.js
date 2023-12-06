import React from 'react';
import styles from './Product.module.scss';

const Produkt = ({ id, obrazek, cena, tekstOdnośnika, ocena, sprzedane }) => (
  <div className={styles.singleproduct__wrapper} id={`product-${id}`}>
    <div className={styles.inner}>
      <div className={styles.singleproduct__wraper__image}>
        <img className={styles.image} src={obrazek} alt={`Produkt ${id}`} />
        <ul className={styles.listActions}>
    <li className={styles.list}>
        <a className={styles.anchor} href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart">
            <i className="icon-bag2"></i>
        </a>
    </li>
    <li className={styles.list}>
        <a className={styles.anchor} href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
            <i className="icon-eye"></i>
        </a>
    </li>
    <li className={styles.list}>
        <a className={styles.anchor} href="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist">
            <i className="icon-heart"></i>
        </a>
    </li>
    <li className={styles.list}>
        <a className={styles.anchor} href="#" data-toggle="tooltip" data-placement="top" title="Compare">
            <i className="icon-chart-bars"></i>
        </a>
    </li>
</ul>
      </div>
      <div className='singleproduct__wrapper__text'>
         <a className={styles['singleproduct__wrapper__text--anchor']}>{tekstOdnośnika}</a>
        <div className='singleproduct__wrapper__rating'>
          <span className='ps-rating'>{ocena}</span>
        </div>
        <h6 className={styles['singleproduct__wrapper__text--price']}>{cena}</h6>
     
        <div className='singleproduct__wrapper__sold' data-value={sprzedane}>
        </div>
      </div>
    </div>
  </div>
);

export default Produkt;
