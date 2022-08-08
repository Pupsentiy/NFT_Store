import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchTraidPlatform } from "./asyncActions"
import { TraidPlatform, TraidSliceState, Status } from "./types"


const initialState: TraidSliceState = {
    items: [],
    status: Status.LOADING,
}

const TraidSlice = createSlice({
    name: 'traidPlatform',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TraidPlatform[]>){
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchTraidPlatform.pending.type]: (state) => {
            state.status = Status.LOADING;
            state.items = [];    
        },

        [fetchTraidPlatform.fulfilled.type]: (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;    
        },

        [fetchTraidPlatform.rejected.type]: (state) => {
            state.status = Status.ERROR;
            state.items = [];    
        },
    } 
})

export const { setItems } = TraidSlice.actions

export default TraidSlice.reducer