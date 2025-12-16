import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
    reducer : authReducer
    // TODO: Add more slice for posts
})

export default store