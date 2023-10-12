// authslice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
  displayName: null,
  userID: null,
  isLoading: false,
  isRegistered: false,

 };


 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state) => {
      state.isLoggedIn = true;

    },
    LOGOUT_USER: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.displayName = null;
     },

  },
});

export const {
  SET_ACTIVE_USER,
  LOGOUT_USER,
} = authSlice.actions;

export const selectIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};

export const selectEmail = (state) => state.auth.email;
export const selectDisplayName = (state) => state.auth.displayName;
export const selectUserID = (state) => state.auth.userID;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsRegistered = (state) => state.auth.isRegistered;

export default authSlice.reducer;
