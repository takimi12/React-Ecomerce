import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
import productReducer from "./slice/productslice";
import filterReducer from "./slice/filterslice";
import cartReducer from "./slice/cartslice";
import checkoutReducer from "./slice/checkoutSlice";
import orderReducer from "./slice/orderslice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
  checkoout: checkoutReducer,
  orders: orderReducer,
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
