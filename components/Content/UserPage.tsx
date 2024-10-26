'use client'

import Main from "../Main";
import dynamic from "next/dynamic";
import { useAppDispatch } from "@/lib/store";
import { setToken } from "@/store/tokenSlice";

const UserPage = () => {

    const dispatch = useAppDispatch();

    const exit = () => {
        localStorage.clear();
        const token = localStorage.getItem('token')!
        dispatch(setToken(token))
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