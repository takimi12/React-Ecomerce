import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { selectProducts } from '../../redux/slice/productslice';
import { useSelector } from 'react-redux';
import styles from './SevenSection.module.scss';
import Produkt from './components/Product';

const SixSection = () => {
  const [activeTab, setActiveTab] = useState('New Arrival');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const products = useSelector(selectProducts);



  const Laptop = products.filter((product) => product.category === 'Laptop' );


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
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
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
  <section className={styles.SeventhSection}>
    <div className={styles.SeventhSection__TopInfo}>
      <div>
        <h3>Laptop</h3>
      </div>
    </div>
    <div className={styles.SeventhSection__Container}>
      <Slider {...ustawieniaKaruzeli}>
        {Laptop.map((product) => (
          <Produkt 
          key={product.id}
            id={product.id}
            price={product.price}
            name = {product.name}
            imageURL={product.imageURL}
            tekstOdnośnika={product.name}
            cena={product.price}
           />
        ))}
      </Slider>
    </div>
  </section>
);

};

export default SixSection;
