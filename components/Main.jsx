'use client'

import React from 'react';
import dynamic from 'next/dynamic'
import ReduxProvider from '@/store/redux-provider';
import Header from './Header';
import Navbar from './Navbar';


const Main = ({ children }) => {

    return (
        <main className="page">
            <ReduxProvider>
                <Header />
                <Navbar />
                <div className='content'>
                    {children}
                </div>
            </ReduxProvider>
        </main>);
}


export default dynamic(() => Promise.resolve(Main), {
    ssr: false
}) // ssr выключен!