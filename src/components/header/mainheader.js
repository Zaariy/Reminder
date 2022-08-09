import React from 'react';
import "./style/mainheader.css"
import Search from '../search/mainsearch';
import Themes   from '../themes/colorsthems';
import Language from '../languages/lang';

function Header() {
    return (

        <div className="main-header">
           <Search /> 
           <Themes />
           <Language />
        </div>
    )
}

export default Header