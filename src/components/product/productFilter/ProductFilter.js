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

return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => filterProducts(cat)}
              className={`${category}` === cat ? `${styles.active}` : null}>
              &#8250; {cat}
              </button>
            )
        }
        )}
        <button>All</button>
    </div>
    <h4>Brand</h4>
    <div className={styles.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value) }>
          {allBrands.map((brand, index) => {
            return (
              <option key={index} value={brand}>{brand}</option>
            )
          })}
        
        </select>
      <h4>Price</h4>
      <p>{`$${price}`}</p>
      <div className={styles.price}>
        <input 
        type="range" 
        value={price} 
        name="price" 
        min={minPrice}
        max={maxPrice}
        onChange={(e) => setPice(e.target.value) }
         />
      </div>
      <br />
      <button className="btn btn-primary">Clear Filter</button>
    </div>
    </div>
  )
}

export default ProductFilter