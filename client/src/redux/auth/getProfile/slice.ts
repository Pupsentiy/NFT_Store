import { createSlice } from "@reduxjs/toolkit";

import { getProfile } from "./asyncActions";
import { getProfileInfo } from "../types";

const userToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null

const initialState: getProfileInfo = {
   userInfo:null,
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
      window.location.href = '/'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending,(state) => {
      state.isLoading = true
    })
    builder.addCase(getProfile.fulfilled,(state,{payload}) => {
      state.userInfo = payload;
      state.isLoading = false
      state.error = payload
      console.log(userToken)
    })
    builder.addCase(getProfile.rejected,(state) => {
      state.isLoading = true
    })
  },
})

export const { setLogout } = profileUserSlice.actions;
export default profileUserSlice.reducer;
