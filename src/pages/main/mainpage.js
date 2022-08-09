import React from 'react';
import MainNav from '../../components/nav/mainNav';
import Header from '../../components/header/mainheader';
import Dashboard from '../dashboard/maindashboard';
import './style/mainpage.css'

function Mainpage({lang}) { 
    return (
        <div className="main-page">
                <MainNav lang={lang} />
            <div className='center-page'>
                <Header />
                <Dashboard />  
            </div>
        </div>
    )
}

export default Mainpage;