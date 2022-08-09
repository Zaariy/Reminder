import React, { useRef }  from 'react';
import './style/maincreate.css'
// import navHoverOnClick from '../../utils/navhover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons'



function CreateNote() {
    const cards = useRef(null)
    // for testing 
    const notes = [1, 2, 3]

    function onClickEffect(item) {
        let child = cards.current.children
        let body = document.body.classList.contains('dark-theme')
        for (let i = 0; i < child.length; i++) {
            if (item.target.attributes.id === child[i].attributes.id) {
                if (body) {
                    item.target.classList.add('active-a')   
                } else {

                    item.target.classList.add('active-b')   
                }
            } else {
                if (body) {
                    child[i].classList.remove('active-a')
                } else {
                    child[i].classList.remove('active-b')
                }
            }
        }

        
    }
    return (
        <div className="main-create-notes">
            <div className="content">
                <button ><FontAwesomeIcon icon={faFileCirclePlus} />New note</button>
                <h3>ALL NOTES</h3>
                <div className='all-notes-data' ref={cards}>
                    {
                        notes.map((ele ,index) => {
                            return (
                                <div className='card' onClick={onClickEffect} id={index}  key={index}>
                                    <div className='card-header'>
                                        <span>Math lessen</span>
                                        <span>10 : 30 pm</span>
                                    </div>
                                    <div className='card-body'>
                                        <p>
                                            This is a new note. You will be able to see it in the future.
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
     )
}

export default CreateNote;