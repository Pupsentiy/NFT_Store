// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { getProfile } from "./asyncActions";
import { userInfo } from "../types";

const initialState: any = {
   userInfo:null,
   isLoading:false,
   error:''
};

const profileUserSlice = createSlice({
  name: "getProfileInfo",
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
    },
    [getProfile.rejected.type]: (state) => {
      state.isLoading = true
    },
  },
});

export default profileUserSlice.reducer;
