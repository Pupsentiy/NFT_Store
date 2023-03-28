import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { store } from "../redux/store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;