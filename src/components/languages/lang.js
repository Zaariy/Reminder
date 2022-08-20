import React , {useState} from  'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './styles/lang.css'

function Language() {
    
    const [icon, setIcon] = useState(false)
    
    return (
        <div className='lang' >
            <div className='content'>
                <FontAwesomeIcon onClick={() => setIcon((prv) => prv = !prv)} className='icon-lang' icon={faGlobe} />
            </div>
            <ul style={{display: icon ? 'block' : 'none'}}>
                <li onClick={() => {
                    setIcon(false)
                }} ><Link to='/en'>English</Link></li>
                {/* <li onClick={() => {
                    setIcon(false)
                }}   ><Link to='/ar'>Arabic</Link></li> */}
            </ul>
        </div>
    )
}

export default Language;