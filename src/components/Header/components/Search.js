import React, { useState } from 'react';
import styles from './Search.module.scss';
import { BiChevronDown, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

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
            item.brand.toLowerCase().includes(inputValue) ||
            item.id.toLowerCase().includes(inputValue)
          )
      );

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    setInputValue(input);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSuggestions([]);
    setInputValue('');
  };

  const handleSearch = () => {
    if (inputValue.length < 2) {
      // Display a message or take any appropriate action when the input is less than two characters
      alert('Please enter at least two characters to search.');
    } else if (suggestions.length > 0) {
      // Redirect to the details page of the first suggestion
      const firstSuggestionId = suggestions[0].id;
      window.location.href = `/product-details/${firstSuggestionId}`;
    }
    // You can add additional conditions or actions based on your requirements
  };

  return (
    <>
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
          <div className={styles.dropdownIcon}>
            <BiChevronDown size={20} color=" #999999" />
          </div>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder={`Search`}
            value={inputValue}
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
          />
          {inputValue && (
            <div
              className={styles.closeIcon}
              onClick={() => {
                setSuggestions([]);
                setInputValue('');
              }}
            >
              <BiX size={20} color="#999999" />
            </div>
          )}
        </div>
        <div>
          {suggestions.length > 0 && (
            <div className={styles.suggestions}>
              {suggestions.map((item) => (
                <Link
                  to={`/product-details/${item.id}`}
                  key={item.id}
                  className={styles.suggestion}
                  onClick={() => {
                    setSuggestions([]);
                    setInputValue('');
                  }}
                >
                  <div className={styles.suggestionImage}>
                    <img src={item.image} alt={item.name} className={styles.suggestionImage} />
                  </div>
                  <div className={styles.suggestionDetails}>
                    <p>{item.name}</p>
                    <p>{item.brand}</p>
                    <p>${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.searchButton}>
        <button >
          <Link  onClick={handleSearch}>Search</Link>
          </button>
      </div>
    </>
  );
};

export default Search;
