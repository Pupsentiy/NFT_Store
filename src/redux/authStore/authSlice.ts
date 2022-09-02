import { createSlice} from "@reduxjs/toolkit";
import { AuthSlice } from "./types";

const initialState:AuthSlice = { 
   open:false
}   

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
       setOpen(state, action){
        state.open = action.payload
       }
        
    }
})

export const { setOpen } = authSlice.actions;

export default authSlice.reducer;