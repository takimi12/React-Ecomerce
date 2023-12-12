import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styles from './ProductFilter.module.scss'
import { selectMaxPrice, selectMinPrice, selectProducts } from '../../../redux/slice/productslice'
import { FILTER_BY_BRAND, FILTER_BY_CATEGORY, FILTER_BY_PRICE } from '../../../redux/slice/filterslice';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const ProductFilter = () => {
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([25, 3000]);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FILTER_BY_BRAND({ products, brand }));
  }, [dispatch, products, brand]);

  useEffect(() => {
    dispatch(FILTER_BY_PRICE({ products, price: { min: priceRange[0], max: priceRange[1] } }));
  }, [dispatch, products, priceRange]);

  
  


  const allCategories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];

  const allBrands = ['All', ...new Set(products.map((product) => product.brand))];

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  const filterButtonCategory = (selectedBrand) => {
    setBrand(selectedBrand);
    dispatch(FILTER_BY_BRAND({ products, brand: selectedBrand }));
  };

  const clearFilters = () => {
    setCategory('All');
    setBrand('All');
    setPriceRange([minPrice, maxPrice]);
  };

return (
  <>
    <div className={styles.filter}>
      <div className={styles.wrap}>
      <h4>Categories</h4>

        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => filterProducts(cat)}
              className={styles.filterButtonCattegory}>
              {cat}
              </button>
            )
        }
        )}

    </div>
    <div className={styles.wrap}>
    <h4>Brand</h4>

          {allBrands.map((brand, index) => {
            return (
              <button
              key={index}
              type="button"
              onClick={() => filterButtonCategory (brand)}
              className={styles.filterButtonCattegory}>
              {brand}
              </button>
            )
          })}
        </div>  
        <div className={styles.wrap}>
        <p>{`$${priceRange[0]} - $${priceRange[1]}`}</p>
          <h4>Cena</h4>
          <Slider
            range
            min={minPrice}
            max={maxPrice}
            value={priceRange}
            onChange={(values) => setPriceRange(values)}
          />
        </div>

               <br />

      </div>

 
   
  </>
  )
}

export default ProductFilter