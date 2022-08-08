import React, { useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon , faSun} from '@fortawesome/free-solid-svg-icons'
import './styles/colorsthems.css'

function Themes() {
    const [icon, setIcon] = useState(false)

    function selectThemes() {
        if (icon === false) {

            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }
    return (
        <div className="themes">
            <FontAwesomeIcon className="themes-icon" onClick={() => {
                setIcon((prv) => prv = !prv)
                selectThemes()
            }} icon={icon ? faMoon : faSun} />
        </div>
    )
}

export default Themes;