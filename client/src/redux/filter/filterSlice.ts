import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersSliseState, Sort, SortPropertyEnum } from "./types";

const initialState:FiltersSliseState = { 
    currentPage: 1,
    categoryFilter: 'All',
    searchValue:'',
    sort: {
        name: 'price(DESC)',
        sortProperty: SortPropertyEnum.PRICE_DESC,
      },
}   

const filterSlice = createSlice ({
    name: 'filters',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setCategoryInnerHtml(state, action:PayloadAction<string>) {
            state.categoryFilter = action.payload
        },
        setSearchValue(state,action){
            state.searchValue = action.payload
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
          },
        
    }
})

export const { setCurrentPage, setCategoryInnerHtml,setSearchValue,setSort } = filterSlice.actions;

export default filterSlice.reducer;