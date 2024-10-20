'use client'
import React from "react";
import { useAppSelector } from "@/lib/store";


const AuthViewer = () => {
    const authState = useAppSelector((state) => state.auth.authState);
    return (
        <div>
            You are now {authState ? "Logged  In" : "Logged Out"}
        </div>
    );
};
export default AuthViewer;