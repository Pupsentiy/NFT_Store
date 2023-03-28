import { configureStore } from "@reduxjs/toolkit";

import signUp from './auth/signUp/slice'
import singIn from './auth/singIn/slice'
import card from "./cards/slice";
import filters from './filter/filterSlice'
import getProfileInfo from './auth/getProfile/slice'

export const store = configureStore({
  reducer: {
    signUp,
    singIn,
    card,
    filters,
    getProfileInfo
  },
});




