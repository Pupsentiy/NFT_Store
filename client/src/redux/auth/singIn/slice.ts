// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { loginUser } from "./asyncActions";
import { SignIn } from "../types";

const initialState: SignIn = {
  isLoading: false,
  isAuth: false,
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
      window.location.href = '/profile'
    },
    [loginUser.rejected.type]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default signInSlice.reducer;
