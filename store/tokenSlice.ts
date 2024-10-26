import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IToken {
    token: string;
}

const initialState: IToken = {
    token: "",
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;