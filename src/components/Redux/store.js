import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import filter from "./filterSlice";


export const store = configureStore({
    reducer: {
        filter,
        cart
    }
})