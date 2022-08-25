import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersSliseState } from "./types";

const initialState:FiltersSliseState = { 
    currentPage: 1,
    categoryText: 'All',
}

const filterSlice = createSlice ({
    name: 'filters',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setCategoryInnerHtml(state, action:PayloadAction<string>) {
            state.categoryText = action.payload
        }
    }
})

export const { setCurrentPage, setCategoryInnerHtml } = filterSlice.actions;

export default filterSlice.reducer;