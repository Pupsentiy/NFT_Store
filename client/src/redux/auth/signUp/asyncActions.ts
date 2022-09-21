import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../../common/enums";
import { authQuery } from "../../../api/fetchWrappers";
import { signUpUser } from "../types";

export const registerUser = createAsyncThunk(
  `${API.signUpPath}`,
  async (data: signUpUser, { rejectWithValue }) => {
    try {
      const response = await authQuery(data, API.signUpPath);
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
