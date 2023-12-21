import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;
      const tempProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredProducts = tempProducts;
    },
    SORT_PRODUCTS(state, action) {
      const { products, sort } = action.payload;
      let tempProducts = [];
      if (sort === "latest") {
        tempProducts = products;
      } else if (sort === "lowest-price") {
        tempProducts = products.slice().sort((a, b) => a.price - b.price);
      } else if (sort === "highest-price") {
        tempProducts = products.slice().sort((a, b) => b.price - a.price);
      } else if (sort === "a-z") {
        tempProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));
      } else if (sort === "z-a") {
        tempProducts = products.slice().sort((a, b) => b.name.localeCompare(a.name));
      }

      state.filteredProducts = tempProducts;
    },
    FILTER_BY_CATEGORY(state, action) {
      const { products, category } = action.payload;
      let tempProducts = [];

      if (category === "All") {
        tempProducts = products;
      } else if (category) {
        tempProducts = products.filter((product) => product.category === category);
      }

      state.filteredProducts = tempProducts;
    },
    FILTER_BY_BRAND(state, action) {
      const { products, brand } = action.payload;
      let tempProducts = [];
      if (brand === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_PRICE: (state, action) => {
      const { products, price } = action.payload;
      let tempProducts = [];

      if (price.min !== undefined && price.max !== undefined) {
        tempProducts = products.filter(
          (product) => product.price >= price.min && product.price <= price.max
        );
      } else if (price.min !== undefined) {
        tempProducts = products.filter((product) => product.price >= price.min);
      } else if (price.max !== undefined) {
        tempProducts = products.filter((product) => product.price <= price.max);
      } else {
        tempProducts = [...products];
      }

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  FILTER_BY_SEARCH,
  SORT_PRODUCTS,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
} = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;


export default filterSlice.reducer;
