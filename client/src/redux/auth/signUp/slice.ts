import { createSlice } from "@reduxjs/toolkit";

import { registerUser } from "./asyncActions";
import { SignUp } from "../types";

const initialState: SignUp = {
  isLoading: false,
  success: false,
  error: { message: "" },
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending,(state) => {
      state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled,(state,{payload}) => {
      // state.error = payload; приходит не стринг
      state.success = true;
      window.location.href = '/auth/signin'
      state.isLoading = false;
    })
    builder.addCase(registerUser.rejected,(state) => {
      state.isLoading = true
    })
  },
});

export default signUpSlice.reducer;
