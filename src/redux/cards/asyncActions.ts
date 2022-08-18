import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CardsSliceState } from "./types";

export const fetchItems = createAsyncThunk<CardsSliceState[]>(
  "cards/fetchCardsStatus",
  async () => {
    const { data } = await axios.get<CardsSliceState[]>(
      "https://62e42974c6b56b45118311cb.mockapi.io/nftBase"
    );
    return data;
  }
);
