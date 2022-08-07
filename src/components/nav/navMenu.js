import React from 'react';
import "./style/navmenu.css"
import { Link } from 'react-router-dom';
// import icons using fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBorderAll,
    faListCheck,
    faChartLine,
    faArrowRightFromBracket ,
    faCircleQuestion,
    faHeadset
} from '@fortawesome/free-solid-svg-icons';

function Navmenu() {
    return (
        <div className="nav-menu">
            <ul>
                <li className="nav-items">
                    <span>MENU</span>
                    <ul>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faBorderAll} /><Link to={"/"}>Dashboard</Link></li>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faListCheck} /><Link to={"/"}>Tasks</Link></li>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faChartLine} /><Link to={"/"}>Activities</Link></li>
                    </ul>
                </li>
                <li className="support-items">
                    <span>SUPPORT</span>
                    <ul>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faCircleQuestion} /><Link to={"/"}>Need Help</Link></li>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faHeadset} /><Link to={"/"}>Contact Us</Link></li>
                    </ul>
                </li>
                <li className="settings-items">
                   <span>SETTNGS</span> 
                    <ul>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faArrowRightFromBracket} /><Link to={"/"}>Log out</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Navmenu;