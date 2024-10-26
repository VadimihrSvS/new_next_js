import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuth {
    role: string;
    firstName: string;
    lastName: string;
}

const initialState: IAuth = {
    role: "",
    firstName: "",
    lastName: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload;
        },
        setAuthFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setAuthLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
    },
});

export const { setAuthRole } = authSlice.actions;
export const authReducer = authSlice.reducer;