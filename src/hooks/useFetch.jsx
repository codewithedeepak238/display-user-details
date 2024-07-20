import { useEffect, useState } from "react"

export const useFetch = (apipath, index)=>{
    const [list, setList] = useState([]);
    let [loading, setLoading] = useState(false);
    useEffect(()=>{
        let URL = `${apipath}${index?`?index=${index}`:""}`;
        async function fetchData(){
            setLoading(true);
            const res = await fetch(URL);
            const data = await res.json();
            setList(data);
            setLoading(false);
        }
        fetchData();
    }, [apipath, index]);
    return {list, loading};
}