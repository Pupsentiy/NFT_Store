import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../../common/enums";
import { httpQuery } from "../../../api/fetchWrappers";
import { signInUser } from "../types";

export const loginUser = createAsyncThunk(
  `${API.signInPath}`,
  async (data: signInUser, { rejectWithValue }) => {
    try {
      const response = await httpQuery("POST",API.signInPath,data);
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
