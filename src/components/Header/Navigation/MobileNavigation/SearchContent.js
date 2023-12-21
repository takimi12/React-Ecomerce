// SearchContent.jsx
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Search from "../../components/Search";
import { selectProducts } from "../../../../redux/slice/productslice";
import { useSelector } from "react-redux";
import styles from "./SearchContent.module.scss";

const SearchContent = ({ onClose }) => {
  const list = useSelector(selectProducts);
  const [search1, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredList = list.map((item) => ({
    name: item.name,
    brand: item.brand,
    category: item.category,
    price: item.price,
    desc: item.desc,
    image: item.imageURL,
    id: item.id,
  }));

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContent}>
        <div className={styles.top}>
          <h4 className={styles.topHead}>Search</h4>
          <button className={styles.close} onClick={onClose}>
            <IoCloseSharp size={30} />
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <div className={styles.searchWrapper1}>
            <Search
              list={filteredList}
              onChange={(e) => setSearch(e.target.value)}
              category={selectedCategory}
              isRenderedInsideSearchContent // Pass the prop indicating it's rendered inside SearchContent
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
