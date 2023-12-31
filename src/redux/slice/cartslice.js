import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  compareItems: localStorage.getItem("compareItems")
    ? JSON.parse(localStorage.getItem("compareItems"))
    : [],
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  previousURL: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
    
      if (productIndex >= 0) {
        state.cartItems = state.cartItems.map((item, index) =>
          index === productIndex
            ? { ...item, cartQuantity: item.cartQuantity + action.payload.cartQuantity }
            : item
        );
        toast.info(`${action.payload.name} increased by ${action.payload.cartQuantity}`, {
          position: "top-left",
        });
      } else {
        const tempProduct = { ...action.payload };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    DECREASE_CART(state, action) {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[productIndex].cartQuantity > 1) {
        state.cartItems = state.cartItems.map((item, index) =>
          index === productIndex
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        );
        toast.info(`${action.payload.name} decreased by one`, {
          position: "top-left",
        });
      } else if (state.cartItems[productIndex].cartQuantity === 1) {
        const newCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newCartItem;
        toast.success(`${action.payload.name} removed from cart`, {
          position: "top-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    REMOVE_FROM_CART(state, action) {
      const newCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = newCartItem;
      toast.success(`${action.payload.name} removed from cart`, {
        position: "top-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    CLEAR_CART(state) {
      state.cartItems = [];
      toast.info(`Cart cleared`, {
        position: "top-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    CALCULATE_SUBTOTAL(state) {
      const array = [];
      state.cartItems.forEach((item) => {
        const { price, cartQuantity } = item;
        const cartItemAmount = price * cartQuantity;
        array.push(cartItemAmount);
      });
      const totalAmount = array.reduce((a, b) => a + b, 0);
      state.cartTotalAmount = totalAmount;
    },
    CALCULATE_TOTAL_QUANTITY(state) {
      const array = [];
      state.cartItems.forEach((item) => {
        const { cartQuantity } = item;
        array.push(cartQuantity);
      });
      const totalQuantity = array.reduce((a, b) => a + b, 0);
      state.cartTotalQuantity = totalQuantity;
    },
    SAVE_URL(state, action) {
      state.previousURL = action.payload;
    },
    ADD_TO_COMPARE(state, action) {
      const existsInCompare = state.compareItems.some(
        (item) => item.id === action.payload.id
      );

      if (!existsInCompare) {
        state.compareItems.push(action.payload);
        toast.success(`${action.payload.name} added to compare`, {
          position: "top-left",
        });
      } else {
        toast.info(`${action.payload.name} is already in compare`, {
          position: "top-left",
        });
      }
      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
    },
    REMOVE_FROM_COMPARE(state, action) {
      const newCompareItems = state.compareItems.filter(
        (item) => item.id !== action.payload.id
      );
    
      state.compareItems = newCompareItems;
      toast.success(`${action.payload.name} removed from compare`, {
        position: "top-left",
      });
    
      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
    },
    ADD_TO_WISHLIST(state, action) {
      const existsInWishlist = state.wishlistItems.some(
        (item) => item.id === action.payload.id
      );

      if (!existsInWishlist) {
        state.wishlistItems.push(action.payload);
        toast.success(`${action.payload.name} added to wishlist`, {
          position: "top-left",
        });
      } else {
        toast.info(`${action.payload.name} is already in wishlist`, {
          position: "top-left",
        });
      }
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));

    },
    REMOVE_FROM_WISHLIST(state, action) {
      const newWishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.wishlistItems = newWishlistItems;
      toast.success(`${action.payload.name} removed from wishlist`, {
        position: "top-left",
      });

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
  },
});


export const {
  ADD_TO_CART,
  DECREASE_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  REMOVE_FROM_WISHLIST,
  SAVE_URL,
  ADD_TO_COMPARE,
  REMOVE_FROM_COMPARE,
  ADD_TO_WISHLIST,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectPreviousURL = (state) => state.cart.previousURL;
export const selectCompareItems = (state) => state.cart.compareItems;
export const selectWishlistItems = (state) => state.cart.wishlistItems;

export default cartSlice.reducer;

