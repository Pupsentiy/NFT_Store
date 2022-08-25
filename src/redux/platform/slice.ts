import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPlatforms } from "./asyncActions";
import { Platforms, PlatformsSliceState, Status } from "./types";

const initialState: PlatformsSliceState = {
  platforms: [],
  statusPlatform: Status.LOADING,
};

const platformsSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    setPlatforms(state, action: PayloadAction<Platforms[]>) {
      state.platforms = action.payload;
    },
  },
  extraReducers: {
    [fetchPlatforms.pending.type]: (state) => {
      state.statusPlatform= Status.LOADING;
      state.platforms = [];
    },

    [fetchPlatforms.fulfilled.type]: (state, action) => {
      state.platforms = action.payload;
      state.statusPlatform= Status.SUCCESS;
    },

    [fetchPlatforms.rejected.type]: (state) => {
      state.statusPlatform= Status.ERROR;
      state.platforms = [];
    },
  },
});

export const { setPlatforms } = platformsSlice.actions;

export default platformsSlice.reducer;
