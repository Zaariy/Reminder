import React , {useRef , useEffect } from 'react';
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
import navHoverOnClick from '../../utils/navhover';

function Navmenu({lang}) {
   const ulList = useRef(null); 
    useEffect(() => {
        navHoverOnClick(ulList.current);
     } , [])
    return (
        <div className="nav-menu">
            <ul ref={ulList}>
                <li className="nav-items">
                    <span>{lang?.nav["ul-names"][0] }</span>
                    <ul>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faBorderAll} /><Link to={"/"}>{lang?.nav["li-items-names"][0] }</Link></li>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faListCheck} /><Link to={"/"}>{lang?.nav["li-items-names"][1] }</Link></li>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faChartLine} /><Link to={"/"}>{lang?.nav["li-items-names"][2] }</Link></li>
                    </ul>
                </li>
                <li className="support-items">
                    <span>{lang?.nav["ul-names"][1] }</span>
                    <ul>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faCircleQuestion} /><Link to={"/"}>{lang?.nav["li-items-names"][3] }</Link></li>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faHeadset} /><Link to={"/"}>{lang?.nav["li-items-names"][4]}</Link></li>
                    </ul>
                </li>
                <li className="settings-items">
                   <span>{lang?.nav["ul-names"][2] }</span> 
                    <ul>
                        <li><FontAwesomeIcon className='icon-nav-bar' icon={faArrowRightFromBracket} /><Link to={"/"}>{lang?.nav["li-items-names"][5]}</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Navmenu;