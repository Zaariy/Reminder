import React from 'react';
import ShowTasks from './showtaskes';
import './style/maintask.css'



function CreateTask() {


    return (
        <main className='main-create-task'>
            <section className='content' >
                <input name='newTask' placeholder='Type new task here ...'></input>
                <button>create</button>
            </section>
            <ShowTasks /> 
        </main>
    )

}

export default CreateTask;