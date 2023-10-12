import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
// Import inny reducer, jeśli taki istnieje

const rootReducer = combineReducers({
  auth: authReducer,
  // Dodaj inny reducer, jeśli jest dostępny
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
