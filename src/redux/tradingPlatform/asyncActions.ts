import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TraidPlatform } from "./types";


export const fetchTraidPlatform = createAsyncThunk<TraidPlatform[]>(
    'cards/fetchCardsStatus',
    async  () => {
        const {data} = await axios.get<TraidPlatform[]>('https://62e42974c6b56b45118311cb.mockapi.io/cards')
    return data
    }
)