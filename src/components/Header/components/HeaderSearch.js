import React, { useEffect, useRef, useState } from 'react';
import Search from './Search';

const HeaderSearch = ({ list }) => {
  const [search1, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("header search",list);

  // Przygotowanie danych, wybierając tylko określone pola
  const filteredList = list.map(item => ({
    name: item.name,
    brand: item.brand,
    category: item.category,
    price: item.price,
    desc: item.desc,
    image: item.imageURL,
  }));


 return (
    <form className="ps-form--quick-search" method="get" action="/">
      <div className="ps-form__input">
        {/* Pass selectedCategory to the Search component */}
        <Search
          list={filteredList}
          onChange={(e) => setSearch(e.target.value)}
          category={selectedCategory}
        />
      </div>
      <button>Szukaj</button>
      <div>
        <div className="ps-panel__content"></div>
      </div>
    </form>
  );
};

export default HeaderSearch;