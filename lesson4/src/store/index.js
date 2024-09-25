import {configureStore} from "@reduxjs/toolkit";
import mainReducer from './mainSlice'
import usersReducer from './usersSlice'
import counterReducer from "./counterSlice";

export const store = configureStore({
    reducer: {
        mainReducer,
        usersReducer,
        counterReducer
    }
})