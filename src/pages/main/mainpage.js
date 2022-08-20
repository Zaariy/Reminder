import React from 'react';
import MainNav from '../../components/nav/mainNav';
import Header from '../../components/header/mainheader';
import Dashboard from '../dashboard/maindashboard';
import Taskes from '../taskes/taskes';
import './style/mainpage.css'

function SwitchComponent({path}) {
    // this Component recive path page from component Mainpage Component
    switch (path) {
        case 'dashboard':
            return <Dashboard />
        case 'taskes':
            return <Taskes />
        default:
            return <Dashboard />
    }
}

function Mainpage({lang , path}) { 
    // this component receives a path from component App component to decide which page will be showing
    return (
        <div className="main-page">
                <MainNav lang={lang} />
            <div className='center-page'>
                <Header />
                <SwitchComponent path={path} />      
           </div>
        </div>
    )
}

export default Mainpage;