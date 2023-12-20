import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { selectProducts } from '../../redux/slice/productslice';
import { useSelector } from 'react-redux';
import styles from './SixSection.module.scss';
import Produkt from './components/Product';

const SixSection = () => {
  const [activeTab, setActiveTab] = useState('New Arrival');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const products = useSelector(selectProducts);




  const phoneProducts = products.filter((product) => product.category === 'Phone');


  const ustawieniaKaruzeli = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: false,
    autoplay: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  


return (
  <section className={styles.SixthSection}>
    <div className={styles.SixthSection__TopInfo}>
      <div>
        <h3 className={styles.mainHeading}>Phone</h3>
      </div>
    </div>
    <div className={styles.SixthSection__Container}>
      <Slider {...ustawieniaKaruzeli}  className={styles.slick}>
        {phoneProducts.map((product) => (
          <Produkt 
            key={product.id}
            id={product.id}
            price={product.price}
            name = {product.name}
            desc = {product.desc}
            brand = {product.brand}
            imageURL={product.imageURL}
            category={product.category}

           />
        ))}
      </Slider>
    </div>
  </section>
);

};

export default SixSection;
