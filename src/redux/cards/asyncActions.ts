import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cards } from "./types";


export const fetchCards = createAsyncThunk<Cards[]>(
    'cards/fetchCardsStatus',
    async  () => {
        const {data} = await axios.get<Cards[]>('https://62e42974c6b56b45118311cb.mockapi.io/cards')
    return data
    }
)