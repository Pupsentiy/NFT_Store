// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { getProfile } from "./asyncActions";
import { getProfileInfo } from "../types";

const userToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null

const initialState: getProfileInfo = {
   userInfo:{
    id:0,
    firstName:'',
    avatar:null,
   },
   userToken,
   isLoading:false,
   error:''
};

const profileUserSlice = createSlice({
  name: "getProfileInfo",
  initialState,
  reducers: {
    setLogout: (state) => {
      localStorage.clear() // delete token from storage
      state.isLoading = false
      state.userInfo = null
      state.error = ''
    },
  },
  extraReducers: {
    [getProfile.pending.type]: (state) => {
      state.isLoading = true
    },
    [getProfile.fulfilled.type]: (state, {payload}) => {
      state.userInfo = payload;
      state.isLoading = false
      state.error = payload
    },
    [getProfile.rejected.type]: (state) => {
      state.isLoading = true
    },
  },
});
export const { setLogout } = profileUserSlice.actions;

export default profileUserSlice.reducer;
