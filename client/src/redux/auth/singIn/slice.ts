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

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending,(state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled,(state,{payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = payload;
      window.location.href = '/profile'
    })
    builder.addCase(loginUser.rejected,(state) => {
      state.isLoading = true
    })
  },
});

export default signInSlice.reducer;
