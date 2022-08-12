import React , {useRef , useState } from 'react';
import {Remarkable} from 'remarkable'



var md = new Remarkable({
  html:         false,        // Enable HTML tags in source
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

function WriteNewNote() {
    const [mark, setMark] = useState("")

    let r = useRef(null);
    let textarea = useRef(null)
    function write() {
        const value = textarea.current.value
        setMark(value)

        // md.parseInline('# hello ' ,true)
        // console.log(value)
        // md.parse('# hello ' , inline)
        r.current.innerHTML = md.render(mark) 
    }

    return ( 
        <div>
            <textarea ref={textarea}   onChange={write}></textarea>
            <div ref={r} ></div>
        </div>
    )
}
export default WriteNewNote;
