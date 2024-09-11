import React from 'react';
import Navbar from './Navbar';
import Header from './Header'
import DailyReport from '../components/Content/ReportContent/DailyReport'

const Main = ({ children }) => {
    return (
        <main className="page">
            <div className='content'>
                {children}
            </div>
        </main>);
}


export default Main;