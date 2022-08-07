import Navmenu from "./navMenu";
import NavHeader from "./navHeader";
import React from "react";
import './style/nav.css'

function MainNav() {
    return (
        <div className="main-nav">
            <NavHeader />
            <Navmenu />
        </div>

    )
}

export default MainNav;