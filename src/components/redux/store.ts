import { configureStore } from "@reduxjs/toolkit";
import questionSlise from "./slice/questionSlise";


export const store = configureStore({
    reducer:{
        question: questionSlise
    },
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch