import { configureStore } from "@reduxjs/toolkit";

import signUp from './auth/signUp/slice'
import singIn from './auth/singIn/slice'
import cards from "./cards/slice";
import filters from './filter/filterSlice'
import getProfileInfo from './auth/getProfile/slice'

export const store = configureStore({
  reducer: {
    signUp,
    singIn,
    cards,
    filters,
    getProfileInfo
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


