import React , {useRef , useState } from 'react';
import  "./style/docwrite.css"
import {Remarkable} from 'remarkable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



var md = new Remarkable({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (/*str, lang*/) { return ''; }
});

function WriteNewNote(props) {
    // here we are stroning markdown code
    const [mark, setMark] = useState("")
    const [stateShowRs, setStateRs] = useState(false)
    // selecting object {divs} 
    let textarea = useRef(null)
    let results = useRef(null)
    // recive notes data 
    const { state, setStatefunc} = props.stateCreateNote
    
    function write() {
        const value = textarea.current.value
        setMark(value) 
        if (stateShowRs) {
            
            results.current.innerHTML = md.render(mark)
        } 
    }

    function sendText() {
        // this function will send data to the server
        console.log(mark)
    }
    
    return ( 
        <div className='window-create-note'>
            <div className='content'>
                <h1>New Note</h1> 
                <input type="text" name='title' placeholder='Title of new note'></input>
                <input type="text" name='description' placeholder='description'></input>
                <textarea ref={textarea} onChange={write} placeholder="Write Markdown note here ..."></textarea>
                <FontAwesomeIcon onClick={() => setStateRs((prv) => prv = !prv)} className='show-res' icon={faEye} />
                {stateShowRs ? (
                    <div className="display">
                        <h2>Results :</h2>
                        <div className="display-edit" ref={results}></div>
                    </div>
                ) : ''}
                <button className="send-btn" onClick={() => {
                      setStatefunc(!state)
                      sendText()
                }} >Save</button>
            </div>

        </div>
    )
}
export default WriteNewNote;
