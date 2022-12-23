import { createSlice } from "@reduxjs/toolkit";

export const cursorStateSlice = createSlice({
    name: "cursorState",
    initialState: {
        cursorState: false
    },
    reducers: {
        setCursorState: (state, { payload }) => {
            state.cursorState = payload;
        },
    },
});

export const { setCursorState } = cursorStateSlice.actions;
export default cursorStateSlice.reducer;
