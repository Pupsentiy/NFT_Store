import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    pageCount: 1,
    categoryId: 'All',
}

const filterSlice = createSlice ({
    name: 'filters',
    initialState,
    reducers: {
        setPageCount(state, action) {
            state.pageCount = action.payload
        },
        setCategoryId(state, action) {
            state.categoryId = action.payload
        }
    }
})

export const { setPageCount, setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;