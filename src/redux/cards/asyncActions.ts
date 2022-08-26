import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CardsSliceState, SearchCardsParams } from "./types";

export const fetchItems = createAsyncThunk<CardsSliceState[], SearchCardsParams>(
  "cards/fetchCardsStatus",
  async (params) => {
    const {currentPage, category} = params;
    // console.log(params, 4444);
    const { data } = await axios.get<CardsSliceState[]>(
      "https://62e42974c6b56b45118311cb.mockapi.io/cards",{
        params:(
          {
            page:currentPage,
            limit:9,
            category,
          }
        )
      }
    );

    return data;
  }
);
