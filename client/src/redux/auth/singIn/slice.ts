// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { loginUser } from "./asyncActions";
import { SignIn } from "../types";

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState: SignIn = {
  isLoading: false,
  isAuth: false,
  userToken,
  error: { message: "" },
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = action.payload;
      state.userToken = action.payload
    },
    [loginUser.rejected.type]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default signInSlice.reducer;
