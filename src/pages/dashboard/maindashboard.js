import React , {useState} from 'react';
import "./style/dashboard.css"
import CreateNote from "../../components/createnote/maincreate"
import BoxTools from "../../components/toolbox/mainbox";
import DocEdit from '../../components/documentedit/maindoc';
import data from '../../data/fakedata.json'

// switch components

function SwitchComponent({state , filterNoteById , clearState}) {
    // check Display
    if (window.screen.width > 576) {
        return (
                    <div className='dashboard'>
                            <CreateNote setdataparent={{ filterNoteById }} />

                        <div className='dash-content'>
                            <BoxTools  />
                            <DocEdit data={state}  />

                        </div>
                    </div>
            )
    }

    switch (state.length) {
        case 0:
                return (
                    <div className='dashboard'>
                            <CreateNote setdataparent={{ filterNoteById }} />

                        <div className='dash-content'>
                            <BoxTools  />
                            <DocEdit data={state}  />

                        </div>
                    </div>
            )
        
        default: 
            // mobile display mode
            return (
                    <div className='dashboard'>
                        <div className='dash-content show-doc-component '>
                        <button className='back-btn' onClick={clearState} >  back</button>
                            <BoxTools  />
                            <DocEdit data={state } stateLayout={true}  />
                        </div>
                    </div>
            )
    }
}

function Dashboard() {

    const [state, setState] = useState('');

    function filterNoteById(id) {
        /*
            // this function is used to filter the notes by id 
        */
        const item =  data.filter((ele) => {
           return  ele.id ===  id
        })
        setState(item)   
    }


    function clearState() {
        /*
            * cleare data from state
            * if state is empty we will go back to create note component
            * if note we will stay on DocEdit component
        */
        setState('')
    }

    // SwitchComponent :
    // here we display components depending on state and, 
    //display of screen if mobile or desktop
    return (
        <SwitchComponent state={state}  filterNoteById={filterNoteById} clearState={clearState} />
    )
}

export default Dashboard;