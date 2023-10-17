import React, { useState } from 'react'
import styles from './ProductList.module.scss'
import { FaListAlt} from 'react-icons/fa'
import {  BsFillGridFill } from 'react-icons/bs'
import Search from '../../search/Search'

const ProductList = () => {
  const [grid, setGrid] = useState(true)
  const [search, setSearch] = useState('')

  return (
    <div className={styles["product-list"]} id="product">
      <div className={styles.top}>
        <div className={styles.icon}>
          <BsFillGridFill size={22} color="orangered" 
          onClick={() => setGrid(true)} />
          <FaListAlt size={22} 
          onClick={() => setGrid(false)} />
          <p>
            <b>10</b> Products found
          </p>
        </div>
        <div>
          <p><Search /></p>
        </div>
        <div className={styles.sort}>
          <label htmlFor="sort">Sort by</label>
          <select>
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
          </div>
      </div>
      </div>    
  )
}

export default ProductList