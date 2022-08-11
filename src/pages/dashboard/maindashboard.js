import React , {useState} from 'react';
import "./style/dashboard.css"
import CreateNote from "../../components/createnote/maincreate"
import BoxTools from "../../components/toolbox/mainbox";
import DocEdit from '../../components/documentedit/maindoc';
import data from '../../data/fakedata.json'

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
    return (
    <div className='dashboard'>
            <CreateNote setdataparent={{ filterNoteById }} />
        <div className='dash-content'>
            <BoxTools  />
            <DocEdit data={state} />
        </div>
    </div>
    )
}

export default Dashboard;