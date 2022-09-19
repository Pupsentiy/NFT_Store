import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../../common/enums";
import { authQuery } from "../../../api/fetchWrappers";
import { signInUser } from "../types";

export const loginUser = createAsyncThunk(
  `${API.signInPath}`,
  async (date: signInUser, { rejectWithValue }) => {
    try {
      const response = await authQuery(date, API.signInPath);
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
