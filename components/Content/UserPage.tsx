'use client'

import Main from "../Main";
import AuthUpdater from "@/components/auth-updater";
import AuthViewer from "@/components/auth-viewer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { useAppDispatch } from "@/lib/store";
import { setAuthState } from "@/store/authSlice";

const UserPage = () => {

    const dispatch = useAppDispatch();

    const exit = () => {
        localStorage.clear();
        dispatch(setAuthState(Boolean(localStorage.getItem('token'))))
    }

    return (
        <Main>
            <button onClick={exit}>EXIT</button>
        </Main>
    );

}

export default dynamic(() => Promise.resolve(UserPage), {
    ssr: false
})