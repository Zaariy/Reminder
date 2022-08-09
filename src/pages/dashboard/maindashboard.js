import React from 'react';
import "./style/dashboard.css"
import CreateNote from "../../components/createnote/maincreate"
import BoxTools from "../../components/toolbox/mainbox";
import DocEdit from '../../components/documentedit/maindoc';

function Dashboard() {
    return (
    <div className='dashboard'>
        <CreateNote />
        <div className='dash-content'>

          <BoxTools />
          <DocEdit />
        </div>
    </div>
    )
}

export default Dashboard;