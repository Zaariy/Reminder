import React from 'react';
import './style/mainbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function BoxTools() {

    return (
        <div className="box-tool">
            <h3>Tool Box</h3>
            <div className="tools">
                <ul>
                    <li><FontAwesomeIcon icon={faPenToSquare} /> Edit</li>
                </ul>
            </div>
        </div>
    )
}

export default BoxTools