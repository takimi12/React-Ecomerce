// CategoryPopup.jsx
import React from "react";
import styles from "./Categories.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import ProductFilter from "../../../product/productFilter/ProductFilter";
import { selectProducts } from "../../../../redux/slice/productslice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FILTER_BY_CATEGORY } from "../../../../redux/slice/filterslice";

const CategoryPopup = ({ onClose }) => {
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();
  const allCategories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];

  const filterProducts = (cat) => {
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
    onClose();
  };
  
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContent}>
        <div className={styles.top}>
          <h4 className={styles.topHead}>Categories</h4>
          <button className={styles.close} onClick={onClose}>
            <IoCloseSharp size={30} />
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.category}>
          {/* Mapping over allCategories and rendering content for each category */}
          {allCategories.map((cat, index) => (
            <div key={index} className={styles.categoryItem}>
              <Link 
                key={index}
                onClick={() => filterProducts(cat) }
                className={styles.filterButtonCattegory}>
                {cat}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPopup;
