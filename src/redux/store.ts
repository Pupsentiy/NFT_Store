import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import card from './cards/slice'
import traidPlatform from './tradingPlatform/slice'

export const store = configureStore({
    reducer: {
        card,
        traidPlatform
    }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();