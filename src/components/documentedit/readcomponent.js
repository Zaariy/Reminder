import React from 'react'


function ReadNote(props) {
    const {stateLayout , data} = props.data
    return (
        <div className={stateLayout ? "doc-edit mobile-height" : "doc-edit"}>
                <div className='document-content' >
                    <h1>{data[0]?.head }</h1>    
                <span>{data[0]?.time}</span>
                <div className='text'>
                {data[0]?.text}
                </div>
                    
            </div>
        </div> 
    )
}
export default ReadNote;