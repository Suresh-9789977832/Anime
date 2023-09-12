import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const Globalcontext = createContext()


const baseurl = "https://api.jikan.moe/v4";




export const Globalcontextprovider = ({ children }) => {



    const [total, settotal] = useState({
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        issearch: false,
        searchresult: [],
        loading:false,
            })
    

    async function getdata() {
        let res = axios.get(`${baseurl}/top/anime?filter=bypopularity`)
        let data =await res
        settotal({...total, popularAnime:data.data.data})
    }

    useEffect(() => {
       getdata() 
    },[])
  


    return (
        <Globalcontext.Provider value={{...total}}>
            {children}
            </Globalcontext.Provider>
        )
}


export const UseGlobalcontext = () => {
        return useContext(Globalcontext)
}