'use client'

import Main from "../Main";
import ReduxProvider from "@/store/redux-provider";
import AuthUpdater from "@/components/auth-updater";
import AuthViewer from "@/components/auth-viewer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { useAppDispatch } from "@/lib/store";
import { setAuthState } from "@/store/authSlice";

const UserPage = () => {

    const dispatch = useAppDispatch();

    return (
        <ReduxProvider>
            <Main>
                <button onClick={() => { dispatch(setAuthState(false)) }}>EXIT</button>
            </Main>
        </ReduxProvider>
    );

}

export default dynamic(() => Promise.resolve(UserPage), {
    ssr: false
})