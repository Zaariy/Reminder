import { useState , useEffect } from 'react';

function useNoteData() {

    const [dataState, setData] = useState('');
    useEffect(() => {
        console.log(dataState)
    } , [dataState])
    return { dataState, setData };
}

export default useNoteData;