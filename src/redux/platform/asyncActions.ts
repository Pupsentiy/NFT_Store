import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PlatformsSliceState} from "./types";

export const fetchPlatforms = createAsyncThunk<PlatformsSliceState[]>(
  "platforms/fetchPlatformsStatus",
  async () => {
    const { data } = await axios.get<PlatformsSliceState[]>(
      "https://62e42974c6b56b45118311cb.mockapi.io/platform",{
      }
    );
    return data;
  }
);
