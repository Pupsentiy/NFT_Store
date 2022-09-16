import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../../common/enums";
import {authQuery} from '../../../api/fetchWrappers'

export const registerUser = createAsyncThunk(
  `${API.signUpPath}`,
  async (date:any, { rejectWithValue }) => {
    try {
      const response = await authQuery(date,API.signUpPath)
      console.log(response,'response');
      return response
    } catch (e: any) {
      if (e.response && e.response.data.message) {
        return rejectWithValue(e.response.data.message);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);
