'use client'

import { useState } from "react";

export default function LoginScreen() {

    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
            <h1>Добро пожаловать {isLogin.toString()}</h1>
            <button onClick={() => setIsLogin(!isLogin)}>Switch</button>
        </>
    );
};
