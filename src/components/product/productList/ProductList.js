import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import { FaListAlt } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import Search from '../../search/Search';
import ProductItem from '../productItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_BY_SEARCH, SORT_PRODUCTS, selectFilteredProducts } from '../../../redux/slice/filterslice';
import Pagination from '../../pagination/Pagination';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { selectProducts } from '../../../redux/slice/productslice';



const ProductList = () => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const filteredProducts = useSelector(selectFilteredProducts);
  const products = useSelector(selectProducts);



  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(25);
  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
        <div className={styles.found}>
          <p>
            <strong className={styles.strong}>{filteredProducts.length}</strong> Products found
          </p>
        </div>
        <div>
          <p>
            <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          </p>
        </div>
        <div className={styles.sort}>
          <select calue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Sort by Latest</option>
            <option value="lowest-price">Sort by Lowest Price</option>
            <option value="highest-price">Sort by Highest Price</option>
            <option value="a-z">Sort by A-Z</option>
            <option value="z-a">Sort by Z-A</option>
          </select>
          <MdOutlineArrowDropDown size={22} />
        </div>

        
        <div className={styles.site}>
        <BsFillGridFill
            size={22}
            onClick={() => setGrid(true)}
          />
          <FaListAlt size={22} onClick={() => setGrid(false)} />
          </div>
      </div>
      <div className={grid ? styles.grid : styles.list}>
        {products.lenght === 0 ? (
          <p>No product found.</p>
        ) : (
          <>
            {currentProducts.map((product) => {
              return (
                <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageURL={product.imageURL}
                cartQuantity={product.cartQuantity} // Tu dodaj odpowiednie pole, jeśli nie istnieje w oryginalnym obiekcie
                desc={product.desc}
                brand={product.brand}
                category={product.category}
                grid={grid} // Pamiętaj o zdefiniowaniu zmiennej grid
                product={product}
              />
              
              );
            })}
          </>
        )}
  
      </div>
      <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        />
    </div>
  );
};

export default ProductList;
