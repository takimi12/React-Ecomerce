import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory1: "All",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    filterByCategoryOne: (state, action) => {
      const { category1 } = action.payload;
      state.selectedCategory1 = category1;
    },
  },
});

export const { filterByCategoryOne } = categorySlice.actions;

export const selectFilteredProducts1 = (state) => state.category.selectedCategory1;

export default categorySlice.reducer;
