import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styles from './ProductFilter.module.scss'
import { selectProducts } from '../../../redux/slice/productslice'
import { FILTER_BY_BRAND, FILTER_BY_CATEGORY, FILTER_BY_PRICE } from '../../../redux/slice/filterslice';



const ProductFilter = () => {
  const [category, setCategory] = useState("All");
const products = useSelector(selectProducts)

const dispatch = useDispatch()

const allCategories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

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
      <select name="brand">
        <option value="all"> All</option>
      </select>
      <h4>Price</h4>
      <p>1500</p>
      <div className={styles.price}>
        <input type="range" name="price" min="100"
        max="100" />
      </div>
      <br />
      <button className="btn btn-primary">Clear Filter</button>
    </div>
    </div>
  )
}

export default ProductFilter