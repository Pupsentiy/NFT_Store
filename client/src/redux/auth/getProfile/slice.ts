// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { getProfile } from "./asyncActions";
import { userInfo } from "../types";

const initialState: any = {
   userInfo:{},
   isLoading:false,
   error:''
};

const profileUserSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [getProfile.pending.type]: (state) => {
      state.isLoading = true
    },
    [getProfile.fulfilled.type]: (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false
      state.error = action.payload
      console.log(action,'fulfiled')
    },
    [getProfile.rejected.type]: (state, action) => {
      state.isLoading = true
    },
  },
});

export default profileUserSlice.reducer;
