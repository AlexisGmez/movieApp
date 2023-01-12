import { configureStore } from "@reduxjs/toolkit";
import apiData from './slices/apiInfoSlice';


export const store = configureStore({

    reducer:{
        apiData
    }
})