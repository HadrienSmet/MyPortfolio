import { configureStore } from "@reduxjs/toolkit";
import cursorStateReducer from "../features/cursorState.slice";

export default configureStore({
    reducer: {
        cursorStateStore: cursorStateReducer,
    }
})