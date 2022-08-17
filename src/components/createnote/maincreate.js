import React, { useRef }  from 'react';
import './style/maincreate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/fakedata.json'
// import WriteNewNote from './docWrite';
/*
  Note :
  the data are coming from fakedata.json we using it just for test our components
*/ 


function CreateNote(props) {
    const cards = useRef(null)
    // for testing 
    /*
        //  ....
    */
    const {filterNoteById , stateCreateNote} = props.setdataparent
    
    console.log('form ' , stateCreateNote)
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
                <div className='control-notes-buttons'>
                    <button onClick={() => {
                        stateCreateNote.setStatefunc(!stateCreateNote.state)
                    }} ><FontAwesomeIcon  icon={faFileCirclePlus} />New note</button>
                    
                </div>
                <h3>ALL NOTES</h3>
                <div className='all-notes-data' ref={cards}>
                    {
                        data.map((ele ,index) => {
                            return (
                                <div className='card' onClick={(e) => {
                                    onClickEffect(e)
                                    filterNoteById(index)
                                }} id={index} key={index}>
                                    <div className='card-header'>
                                        <span>{ele.head }</span>
                                        <span>{ ele.time}</span>
                                    </div>
                                    <div className='card-body'>
                                        <p>
                                            {ele.text}
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