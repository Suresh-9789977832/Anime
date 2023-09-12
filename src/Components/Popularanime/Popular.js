import React from 'react'
import './Popular.css'
import { UseGlobalcontext } from '../../context/Global'
import { Link } from 'react-router-dom'


function Popular() {
    const { popularAnime } = UseGlobalcontext()
    

  return (
      <div className='anime_box'>
          {
              popularAnime.map((e) => {  
                  return <Link to={`/anime/${e.mal_id}`} key={e.mal_id}>
                      <div className='anime_imgbox'>
                      <img src={e.images.jpg.large_image_url} alt='anime_image'/>
                      </div>
                 </Link>
              })
          }
    </div>
  )
}

export default Popular
