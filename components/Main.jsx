'use client'

import React from 'react';
import dynamic from 'next/dynamic'
import ReduxProvider from '@/store/redux-provider';
import Header from './Header';
import Navbar from './Navbar';
import { redirect } from 'next/navigation';
import { jwtDecode } from "jwt-decode";



const Main = ({ children }) => {

    const token = localStorage.getItem('token');
    var authState;
    if (token) {
        authState = jwtDecode(localStorage.getItem('token'));
    }
    if (!token || !authState.isConfirmed) redirect("/login")


    return (
        <main className="page">
            <ReduxProvider>
                <Header />
                <div className='content'>
                    {children}
                </div>
            </ReduxProvider>
        </main>);
}


export default dynamic(() => Promise.resolve(Main), {
    ssr: false
}) // ssr выключен!