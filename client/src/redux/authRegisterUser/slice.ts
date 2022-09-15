// userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authRegisterUser'
import { IRegisterUser } from './types'

const initialState:IRegisterUser = {
  firstName:"",
  email:"",
  password:"",
  isSuccess:false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending.type]: (state) => {
      state.isSuccess = true 
    },
    [registerUser.fulfilled.type]: (state,  action ) => {
      state.isSuccess = true 
    },
    [registerUser.rejected.type]: (state, action ) => {
    },
  },
})
export default userSlice.reducer