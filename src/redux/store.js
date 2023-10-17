import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
import productReducer from "./slice/productslice";
import filterReducer from "./slice/filterslice";
// Import inny reducer, jeśli taki istnieje

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
  // Dodaj inny reducer, jeśli jest dostępny
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
