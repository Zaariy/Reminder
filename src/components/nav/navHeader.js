import React from 'react';
import './style/navheader.css'
// import img profile fro testing
const profileImg = require('../../assets/profile.jpg')


function NavHeader({lang}) {
    return (
        <div className="navbar-header">
            <header>
                <h1>{lang?.nav.header}</h1>
            </header>
            <div className="content">
                <img src={profileImg} alt='img-profile' />
                <div>
                    <span >Mohamed Zaary</span>
                    <button>{lang?.nav["btn-profile"] }</button>
                </div>
            </div>

        </div>
    )
}
export default NavHeader;