import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style/mainsearch.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Search() {

    return (
        <div className="search">
            <div className="content">
                <input type="text" className="search-input" placeholder="Search for note..." ></input>
                <FontAwesomeIcon className='search-icon' icon={faSearch} /> 
            </div>
        </div>
    )
}
export default Search;