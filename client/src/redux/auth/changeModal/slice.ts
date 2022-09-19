import { createSlice } from "@reduxjs/toolkit";
import { AuthTab } from "../types";

const initialState: AuthTab = {
  tabIndex: 0,
};

const changeSlice = createSlice({
  name: "changeModal",
  initialState,
  reducers: {
    setTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
  },
});

export const { setTabIndex } = changeSlice.actions;

export default changeSlice.reducer;
