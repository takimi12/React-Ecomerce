import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styles from './ProductFilter.module.scss'
import { selectMaxPrice, selectMinPrice, selectProducts } from '../../../redux/slice/productslice'
import { FILTER_BY_BRAND, FILTER_BY_CATEGORY, FILTER_BY_PRICE } from '../../../redux/slice/filterslice';


const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPice] = useState(3000);
const products = useSelector(selectProducts)
const minPrice = useSelector(selectMinPrice)
const maxPrice = useSelector(selectMaxPrice)

const dispatch = useDispatch()


const allCategories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];


const allBrands = [
  "All",
  ...new Set(products.map((product) => product.brand)),
];


useEffect(() => {
  dispatch(FILTER_BY_BRAND({products, brand}))
}, [dispatch, products, brand]);  

useEffect(() => {
  dispatch(FILTER_BY_PRICE({products, price}))
}, [dispatch, products, price]);  








const filterProducts = (cat) => {
  setCategory(cat);
  dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
};

const filterButtonCattegory = (brand) => {
  setBrand(brand);
  dispatch(FILTER_BY_BRAND({ products, brand }));
};

const clearFilters = () => {
  setCategory("All");
  setBrand("All");
  setPice(maxPrice);
};


return (
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
              onClick={() => filterButtonCattegory(brand)}
              className={styles.filterButtonCattegory}>
              {brand}
              </button>
            )
          })}
        </div>  
        <div className={styles.wrap}>
      <p>{`$${price}`}</p>

      <h4>Price</h4>
        <input 
        type="range" 
        value={price} 
        name="price" 
        min={minPrice}
        max={maxPrice}
        onChange={(e) => setPice(e.target.value) }
         />
               <br />
   
      </div>

    </div>
  
  )
}

export default ProductFilter