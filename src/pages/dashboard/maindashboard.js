import React , {useState} from 'react';
import "./style/dashboard.css"
import CreateNote from "../../components/createnote/maincreate"
import BoxTools from "../../components/toolbox/mainbox";
import DocEdit from '../../components/documentedit/maindoc';
import data from '../../data/fakedata.json'
import WriteNewNote from '../../components/createnote/docWrite';

// switch components

function SwitchComponent({state , filterNoteById , clearState ,stateCreateNote }) {
    // check Display
    if (window.screen.width > 576) {
        return (
                    <div className='dashboard'>
                            <CreateNote setdataparent={{ filterNoteById  , stateCreateNote}} />

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
                            <CreateNote setdataparent={{ filterNoteById  , stateCreateNote}} />

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
// Dashboard page
function Dashboard() {

    const [state, setState] = useState('');
    const [stateWindow , setWindowstate] = useState(false);
    function filterNoteById(id) {
        /*
            // this function is used to filter the notes by id 
        */
        const item =  data.filter((ele) => {
           return  ele.id ===  id
        })
        setState(item)   
    }

    function showWindow(state) {
        /*
            this function is will call when use click on button
            New note on Page Dashboard and it will change value of state to true 
            when you use click on button Save on page CreateNote on {WriteNewNote} component
            it will change value to false  to hidden component
            */ 
       setWindowstate(state)
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
        <>
            <SwitchComponent state={state}
                filterNoteById={filterNoteById}
                clearState={clearState}
                stateCreateNote={{ 'state' : stateWindow, 'setStatefunc':  showWindow }}
            />
            {stateWindow ? <WriteNewNote  stateCreateNote={{ 'state' : stateWindow, 'setStatefunc':  showWindow }} /> : ''}
        </>
    )
}

export default Dashboard;