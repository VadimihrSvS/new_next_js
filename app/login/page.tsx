"use client"

import Auth from "@/components/Content/Auth"
import Main from "@/components/Main"
import ReduxProvider from "@/store/redux-provider"

const Login = () => {
    return (
        <>
            <ReduxProvider>
                <Auth />
            </ReduxProvider>
        </>
    )
}

export default Login