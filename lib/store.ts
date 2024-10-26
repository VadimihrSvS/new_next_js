import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "@/store/authSlice";
import { persistReducer } from "redux-persist";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { tokenReducer } from "@/store/tokenSlice";

const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        setItem(_key: any, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: any) {
            return Promise.resolve();
        },
    };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// configure which keuy we want to persist
const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["authState"],
};

const tokenPersistConfig = {
    key: "token",
    storage: storage,
    whitelist: ["tokenState"],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    token: persistReducer(tokenPersistConfig, tokenReducer)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;