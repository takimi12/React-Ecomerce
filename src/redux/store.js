import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
import productReducer from "./slice/productslice";
import filterReducer from "./slice/filterslice";
import cartReducer from "./slice/cartslice";
import checkoutReducer from "./slice/checkoutSlice";
import orderReducer from "./slice/orderslice";
import categoryslice from "./slice/categoryslice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  orders: orderReducer,
  category: categoryslice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;