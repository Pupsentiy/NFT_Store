import { createSlice } from "@reduxjs/toolkit";
import { AuthSlice } from "./types";

const initialState: AuthSlice = {
  tabIndex: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
  },
});

export const { setTabIndex } = authSlice.actions;

export default authSlice.reducer;
