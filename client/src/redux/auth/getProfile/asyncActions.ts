import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../../common/enums";
import { httpQuery } from "../../../api/fetchWrappers";

export const getProfile = createAsyncThunk(
  `${API.profileUser}`,
  async (args, { rejectWithValue }) => {
    try {
      const response = await httpQuery('GET',`${API.profileUser}`);
      return response;
    } catch (e: any) {
      if (e.response && e.response.data.message) {
        return rejectWithValue(e.response.data.message);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);
