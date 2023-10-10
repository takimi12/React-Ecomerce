import React, { useEffect, useRef, useState } from 'react';


const exampleCategories = [
    'All',
    'Babies & Moms',
    'Books & Office',
    'Cars & Motocycles',
    'Clothing & Apparel',
    ' Accessories',
    'Bags',
    'Kid’s Fashion',
    'Mens',
    'Shoes',
    'Sunglasses',
    'Womens',
    'Computers & Technologies',
    'Desktop PC',
    'Laptop',
    'Smartphones',
    'Consumer Electrics',
    'Air Conditioners',
    'Accessories',
    'Type Hanging Cell',
    'Audios & Theaters',
    'Headphone',
    'Home Theater System',
    'Speakers',
    'Car Electronics',
    'Audio & Video',
    'Car Security',
    'Radar Detector',
    'Vehicle GPS',
    'Office Electronics',
    'Printers',
    'Projectors',
    'Scanners',
    'Store & Business',
    'Refrigerators',
    'TV Televisions',
    '4K Ultra HD TVs',
    'LED TVs',
    'OLED TVs',
    'Washing Machines',
    'Type Drying Clothes',
    'Type Horizontal',
    'Type Vertical',
    'Garden & Kitchen',
    'Cookware',
    'Decoration',
    'Furniture',
    'Garden Tools',
    'Home Improvement',
    'Powers And Hand Tools',
    'Utensil & Gadget',
    'Health & Beauty',
    'Equipments',
    'Hair Care',
    'Perfumer',
    'Wine Cabinets',
];
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Aktualizuj debouncedValue po opóźnieniu
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const HeaderSearch = () => {
  const inputEl = useRef(null);
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(keyword, 300);

  function handleClearKeyword() {
    setKeyword('');
    setIsSearch(false);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = `/search?keyword=${encodeURIComponent(keyword)}`;
    window.history.pushState({ path: url }, '', url);
    handleSearch(); // Tutaj możesz umieścić logikę obsługi wyszukiwania (np. pobieranie danych z API)
  }

  function handleSearch() {
    setLoading(true);
    // Tutaj możesz umieścić logikę pobierania danych z API lub bazy danych,
    // odpowiednią dla Twojej aplikacji, aby zastąpić getProductRecords.
    // Pamiętaj, że ten fragment kodu jest tylko przykładem i nie jest kompletny.
    // getProductRecords(queries).then((result) => {
    //   setLoading(false);
    //   setResultItems(result);
    //   setIsSearch(true);
    // });
    setLoading(false);
    setIsSearch(true);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch();
    } else {
      setLoading(false);
      setIsSearch(false);
    }
  }, [debouncedSearchTerm]);

  // Reszta kodu pozostaje bez zmian
  let productItemsView,
    clearTextView,
    selectOptionView,
    loadingView,
    loadMoreView;
  if (!loading) {
    if (isSearch) {
      productItemsView = <p>Nie znaleziono produktów.</p>;
    }
    if (keyword !== '') {
      clearTextView = (
        <span className="ps-form__action" onClick={handleClearKeyword}>
          <i className="icon icon-cross2"></i>
        </span>
      );
    }
  } else {
    loadingView = (
      <span className="ps-form__action">
   
      </span>
    );
  }

  selectOptionView = exampleCategories.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));

  return (
    <form
      className="ps-form--quick-search"
      method="get"
      action="/"
      onSubmit={handleSubmit}
    >
      <div className="ps-form__categories">
        <select className="form-control">{selectOptionView}</select>
      </div>
      <div className="ps-form__input">
        <input
          ref={inputEl}
          className="form-control"
          type="text"
          value={keyword}
          placeholder="Szukam..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        {clearTextView}
        {loadingView}
      </div>
      <button onClick={handleSubmit}>Szukaj</button>
      <div
        className={`ps-panel--search-result${isSearch ? ' active' : ''}`}
      >
        <div className="ps-panel__content">{productItemsView}</div>
        {loadMoreView}
      </div>
    </form>
  );
};

export default HeaderSearch;
