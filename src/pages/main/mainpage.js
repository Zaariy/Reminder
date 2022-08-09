import React from 'react';
import MainNav from '../../components/nav/mainNav';
import Header from '../../components/header/mainheader';
import './style/mainpage.css'

function Mainpage({lang}) { 
    return (
        <div className="main-page">
            <MainNav lang={lang} />
            <Header />
        </div>
    )
}

export default Mainpage;