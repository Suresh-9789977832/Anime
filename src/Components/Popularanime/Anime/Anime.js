import React, { useEffect, useState } from 'react'
import './Anime.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Anime() {
    let { id } = useParams()
    const [sepanime, setsepanime] = useState([])
    const [character, setcharacter] = useState([])
    const[show,setshow]=useState(false)
    const baseurl = "https://api.jikan.moe/v4";


    const getitem = async (anime) => {
        let res = await axios.get(`${baseurl}/anime/${anime}`)
        let data = res
        setsepanime(data.data.data)
    }

    const getcharacter = async (anime) => {
        let res = await axios.get(`${baseurl}/anime/${anime}/characters`)
        let data = res
        setcharacter(data.data.data)
    }
    
    const {rating,rank,scored_by,score,status,season,source,duration,title,title_english,aired, popularity}=sepanime

    useEffect(() => {
        getitem(id)
        getcharacter(id)
    }, [])
    
console.log(character)
    
    return <>
        <div className='container'>

         <div className='title'>
                <h1>{title}</h1>
        </div>
        
        <div className='details'>
            <div className='detail'>
                <div className='image'>
                <img src={sepanime.images?.jpg.large_image_url} />
                </div>
                <div className='anime_details'>
                    <p><span className='dark'>Rating: &nbsp;</span> <span>{rating}</span></p>
                    <p> <span className='dark'>Rank: &nbsp;</span>
                        <span>{rank}</span></p>
                    <p>  <span className='dark'>Score: &nbsp;</span>
                            <span>{score}</span></p>
                    <p> <span className='dark'>Scoredby: &nbsp;</span>
                            <span>{scored_by}</span></p>
                    <p>                            <span className='dark'>Popularity: &nbsp;</span>
                            <span>{popularity}</span></p>
                    <p> <span className='dark'>Popularity: &nbsp;</span>
                            <span>{popularity}</span></p>
                    <p>  <span className='dark'>Popularity: &nbsp;</span>
                            <span>{popularity}</span></p>
                    <p><span className='dark'>Popularity: &nbsp;</span>
                            <span>{popularity}</span></p>
                    <p>   <span className='dark'>Status: &nbsp;</span>
                            <span>{status}</span></p>
                    <p><span className='dark'>soruce: &nbsp;</span>
                            <span>{source}</span></p>
                    
                           <p> <span className='dark'>Season: &nbsp;</span>
                    <span>{season}</span></p>

                    <p> <span className='dark'>Duration: &nbsp;</span>
                            <span>{duration}</span></p>
                   
                </div>
            </div>
         
            </div>




            <h3 className='trailer'>Trailer</h3>

        <div className='trailer_con'>
            <iframe
                src={sepanime.trailer?.embed_url}
                title='Inline Frame Example'
                width='800'
                height='400'
                allow='autoplay'
                allowFullScreen
            >   
            </iframe>
        </div>

            <h3>character</h3>
        <div className='character'>
            {
                character.map((e) => (
                    <div className='inner_char'>
                        <img src={e.character.images.jpg.image_url} />
                        <h4>{e.character.name}</h4>
                        <h4>{e.role}</h4>
                    </div>
                ))
                }
            </div>
            </div>



    </>
}

export default Anime
