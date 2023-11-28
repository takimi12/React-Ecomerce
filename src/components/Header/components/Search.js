import React, { useState } from 'react';
import styles from './Search.module.scss';
import { BiSearch } from 'react-icons/bi';

const Search = ({ list }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputValue, setInputValue] = useState('');

  const categories = Array.from(new Set(list.map(item => item.category)));

  const handleInputChange = (input) => {
    const inputValue = input.toLowerCase();

    if (inputValue.length >= 2) {
      const filteredSuggestions = list.filter(
        (item) =>
          (selectedCategory === '' || item.category === selectedCategory) &&
          (item.name.toLowerCase().includes(inputValue) ||
            item.desc.toLowerCase().includes(inputValue) ||
            item.category.toLowerCase().includes(inputValue) ||
            item.brand.toLowerCase().includes(inputValue)
          )
      );

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    setInputValue(input); // Ustawia wartość wprowadzoną do stanu
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSuggestions([]); // Czyści sugestie po zmianie kategorii
    setInputValue(''); // Czyści wartość wprowadzoną po zmianie kategorii
  };

  return (
    <div className={styles.search}>
      <div className={styles.categories}>
        <select
          className={styles.formControl}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.searchBar}>
        <BiSearch size={22} color="orangered" className={styles.icon} />
        <input
          type="text"
          placeholder={`Search`}
          value={inputValue} // Ustawia wartość wprowadzoną z stanu
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
        />
      </div>
      <div>
        {suggestions.length > 0 && (
          <div className={styles.suggestions}>
            {suggestions.map((item) => (
              <div key={item.name} className={styles.suggestion}>
                <div className={styles.suggestionImage}>
                  <img src={item.image} alt={item.name} className={styles.suggestionImage} />
                </div>
                <div className={styles.suggestionDetails}>
                  <p>{item.name}</p>
                  <p>{item.brand}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
