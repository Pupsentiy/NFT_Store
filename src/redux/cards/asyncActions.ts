import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CardsSliceState } from "./types";

export const fetchItems = createAsyncThunk<CardsSliceState[]>(
  "cards/fetchCardsStatus",
  async (params) => {
    // const {currentPage, categoryText} = params;
    const { data } = await axios.get<CardsSliceState[]>(
      "https://62e42974c6b56b45118311cb.mockapi.io/nftBase",{
        params:(
          {
            // page:currentPage,
            limit:12,
          }
        )
      }
    );
    return data;
  }
);
