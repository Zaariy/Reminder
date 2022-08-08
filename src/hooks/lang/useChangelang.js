import { useState , useEffect } from 'react';
import ar from '../../data/ar.json'
import en from '../../data/en.json'


function useChangeLang() {
    const [lang, setLang] = useState('english');
    const [stateLang , setStateLang] = useState(null);
    useEffect(() => {
        console.log(lang)
        if (lang === 'english') {
            setStateLang(en)
        } 
        if (lang === 'arabic') {
            setStateLang(ar)
            
        }

    } , [lang])
     
    return { stateLang , setLang}
}

export default useChangeLang;