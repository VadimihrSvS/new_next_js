'use client'

import React from 'react';
import dynamic from 'next/dynamic'

const Main = ({ children }) => {
    return (
        <main className="page">
            <div className='content'>
                {children}
            </div>
        </main>);
}


export default dynamic(() => Promise.resolve(Main), {
    ssr: false
}) // ssr выключен!