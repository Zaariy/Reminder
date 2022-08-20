import React from 'react';
import './style/navheader.css'
// import img profile fro testing


function NavHeader({lang}) {
    return (
        <div className="navbar-header">
            <header>
                <h1>{lang?.nav.header}</h1>
            </header>
            

        </div>
    )
}
export default NavHeader;