// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { registerUser } from "./asyncActions";
import { SignUp } from "./types";

const initialState: SignUp = {
  isLoading: false,
  isAuth: false,
  error: { message: "An Error occurred" },
};

const signUpSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled.type]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.isAuth = true;
    },
    [registerUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default signUpSlice.reducer;
