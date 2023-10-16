import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
import productReducer from "./slice/productslice";
// Import inny reducer, jeśli taki istnieje

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  // Dodaj inny reducer, jeśli jest dostępny
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
