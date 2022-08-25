import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchItems } from "./asyncActions";
import { Cards, CardsSliceState, Status } from "./types";

const initialState: CardsSliceState = {
  items: [],
  status: Status.LOADING,
};

const cardsSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Cards[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending.type]: (state) => {
      state.status = Status.LOADING;
      state.items = [];
    },

    [fetchItems.fulfilled.type]: (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    },

    [fetchItems.rejected.type]: (state) => {
      state.status = Status.ERROR;
      state.items = [];
    },
  },
});

export const { setItems } = cardsSlice.actions;

export default cardsSlice.reducer;
