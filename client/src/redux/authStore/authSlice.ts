import { createSlice} from "@reduxjs/toolkit";
import { AuthSlice } from "./types";

const initialState:AuthSlice = { 
   open:false,
   tabIndex:0
}   

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
       setOpen(state, action){
        state.open = action.payload
       },
        setTabIndex(state, action){
         state.tabIndex = action.payload
        }
    }
})

export const { setOpen, setTabIndex } = authSlice.actions;

export default authSlice.reducer;