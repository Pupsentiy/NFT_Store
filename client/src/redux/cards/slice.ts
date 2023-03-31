import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchItems } from "./asyncActions";
import { Cards, CardsSliceState, Status } from "./types";

const initialState: CardsSliceState = {
  items: [] as Cards[],
  status: Status.LOADING, // loading | success | error
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // setItems(state, action: PayloadAction<Cards[]>) {
    //   state.items = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending,(state) => {
      state.status = Status.LOADING;
      state.items = [];
    })
    builder.addCase(fetchItems.fulfilled,(state,action) =>  {
      state.items = action.payload
      state.status = Status.SUCCESS;
    })
    builder.addCase(fetchItems.rejected,(state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  },

});

// export const { setItems } = cardsSlice.actions;

export default cardsSlice.reducer;
