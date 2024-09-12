import React from 'react';

const Main = ({ children }) => {
    return (
        <main className="page">
            <div className='content'>
                {children}
            </div>
        </main>);
}


export default Main;