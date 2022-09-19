// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { registerUser } from "./asyncActions";
import { SignUp } from "../types";

const initialState: SignUp = {
  isLoading: false,
  succes: false,
  error: { message: "" },
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled.type]: (state, action) => {
      state.currentUser = action.payload;
      state.error = action.payload;
      state.succes = true;
      state.isLoading = false;
      console.log(action,'fulfiled')
    },
    [registerUser.rejected.type]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default signUpSlice.reducer;
