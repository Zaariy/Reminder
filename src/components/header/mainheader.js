import React, {useState } from 'react';
import "./style/mainheader.css"
import Search from '../search/mainsearch';
import Themes   from '../themes/colorsthems';
import Language from '../languages/lang';
import addClass from '../../utils/addclass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars , faClose} from '@fortawesome/free-solid-svg-icons'; 

function Header() {
    const [stateIconMenu, setStateIconMenu] = useState(false);
    return (

        <div className="main-header">
            <div className='per-menu-mobile'>
                <FontAwesomeIcon className='icon-menu-mobile' onClick={() => {
                    addClass('.main-nav' , 'active-menu-mobile')
                    setStateIconMenu((prv) => prv = !prv); 
                }} icon={stateIconMenu ?  faClose : faBars} /> 
            </div>
           <Search /> 
           <Themes />
           <Language />
        </div>
    )
}

export default Header