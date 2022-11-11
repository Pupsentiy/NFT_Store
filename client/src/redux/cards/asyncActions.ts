import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CardsSliceState, SearchCardsParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const fetchItems = createAsyncThunk<
  CardsSliceState[],
  SearchCardsParams
>("cards/fetchCardsStatus", async (params) => {
  const { currentPage, category, search,order ,sortBy} = params;
  // console.log(params, 4444);
  
  const { data } = await axios.get<CardsSliceState[]>(
    `https://62e42974c6b56b45118311cb.mockapi.io/cards`,
    {
      params: pickBy(
        {
          sortBy,
          page: currentPage,
          limit: 9,
          category,
          search,
          order
        },
        identity
      ),
    }
  );
  return data;
});
