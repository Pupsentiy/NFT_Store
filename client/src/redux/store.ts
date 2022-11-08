import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import signUp from './auth/signUp/slice'
import singIn from './auth/singIn/slice'
import card from "./cards/slice";
import filters from './filter/filterSlice'
import changeModal from './auth/changeModal/slice'
import getProfileInfo from './auth/getProfile/slice'

export const store = configureStore({
  reducer: {
    signUp,
    singIn,
    card,
    filters,
    changeModal,  
    getProfileInfo
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
