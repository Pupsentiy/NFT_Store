import { createSlice } from "@reduxjs/toolkit";
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
        setCategoryId(state, action) {
            state.categoryText = action.payload
        }
    }
})

export const { setCurrentPage, setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;