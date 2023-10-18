import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import { FaListAlt } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import Search from '../../search/Search';
import ProductItem from '../productItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_BY_SEARCH, SORT_PRODUCTS, selectFilteredProducts } from '../../../redux/slice/filterslice';
import Pagination from '../../pagination/Pagination';



const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');
  const filteredProducts = useSelector(selectFilteredProducts)

//Pagination states 
const [currentPage, setCurrentPage] = useState(1);
const [ProductsPerPage, setProductPerPage] = useState(1);
// Get current products
const indexOfLastProduct = currentPage * ProductsPerPage;
const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
// const [indexOfLastProduct, setIndexOfLastProduct] = useState(1);


  const dispatch =  useDispatch()

  useEffect(() => {
    dispatch(SORT_PRODUCTS({products, sort}));
  }, [dispatch, products,sort]);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({products, search}));
  }, [dispatch, products,search]);

  return (
    <div className={styles['product-list']} id="product">
      <div className={styles.top}>
        <div className={styles.icon}>
          <BsFillGridFill
            size={22}
            color="orangered"
            onClick={() => setGrid(true)}
          />
          <FaListAlt size={22} onClick={() => setGrid(false)} />
          <p>
            <b>{filteredProducts.length}</b> Products found
          </p>
        </div>
        <div>
          <p>
            <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          </p>
        </div>
        <div className={styles.sort}>
          <label htmlFor="sort">Sort by</label>
          <select calue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>
      <div className={grid ? styles.grid : styles.list}>
        {products.lenght === 0 ? (
          <p>No product found.</p>
        ) : (
          <>
            {filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} grid={grid} product={product} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      productsPerPage={ProductsPerPage}
      totalProducts={filteredProducts.length}
      />
    </div>
  );
};

export default ProductList;
