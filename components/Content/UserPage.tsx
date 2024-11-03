'use client'

import { redirect } from "next/navigation";
import Main from "../Main";
import dynamic from "next/dynamic";

const UserPage = () => {



    return (
        <Main>
            <button>Hello world</button>
        </Main>
    );

}

export default dynamic(() => Promise.resolve(UserPage), {
    ssr: false
})