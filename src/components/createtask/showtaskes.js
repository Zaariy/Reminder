import React, { useState} from 'react';
import './style/showtaskes.css'

function ShowTasks() {
    // for test 
    const [task , setTask] =  useState([{
        id_task: 1,
        state: false,
        text : 'Read box every single day' 
    }, 
    {
        id_task: 2,
        state: false,
        text : 'go to sleep' 
    }
    ])
    
    // for test
    function doneTask(id , state) {
        const newList =  task.map((element) => {
            if (element.id_task === id) {
                const update = {
                    ...element,
                    state : state
                 }
                return update
           }
           return element
        })
        setTask(newList)
        
    }
    return (
        <section className='show-tasks'>
            <h1>Tasks : </h1>
            <ul>
                {
                    task.map((ele) => {
                        return (

                            <li key={ele.id_task}>
                                <input type='checkbox' onClick={(e) => doneTask(ele.id_task , e.target.checked)}></input>
                                <label style={{'textDecoration' : ele.state ? 'line-through' : 'none'}} >{ele.text}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
export default ShowTasks;