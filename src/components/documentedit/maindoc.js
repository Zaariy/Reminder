import React from 'react'
import ReadNote from './readcomponent'
import './style/maindoc.css'


function Switchcomponents(props) {
    let a = 'read'
    switch (a) {
        case 'read': 
            return  <ReadNote data={props.data} stateLayout={props.stateLayout} />
        default:
            return null
    }     
}

function DocEdit(props) {
    return (
        <Switchcomponents data={props} />
    )
}
export default DocEdit;