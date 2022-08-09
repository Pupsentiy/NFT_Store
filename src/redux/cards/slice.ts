import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchCards } from "./asyncActions"
import { CardsSlice, CardsSliceState, Status } from "./types"


const initialState: CardsSliceState = {
    items: [],
    status: Status.LOADING,
}

const cardsSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<CardsSlice[]>){
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchCards.pending.type]: (state) => {
            state.status = Status.LOADING;
            state.items = [];    
        },

        [fetchCards.fulfilled.type]: (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;    
        },

        [fetchCards.rejected.type]: (state) => {
            state.status = Status.ERROR;
            state.items = [];    
        },
    } 
})

export const { setItems } = cardsSlice.actions

export default cardsSlice.reducer