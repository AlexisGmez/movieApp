import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDataByIdThunk } from '../store/slices/apiInfoSlice';
import './styles/MoviePage.scss';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

const MoviePage = () => {
  
  const {id} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(item=> item.apiData)
  
 
  useEffect(()=>{
    dispatch( getDataByIdThunk(id) )
  },[])

  


  
  return (
    <section className='moviePage'>
      <figure>
        <img src={`${IMAGE_PATH}${data.backdrop_path}`} alt="" />
      </figure>
      <div className="moviePage__info">
        <h2>{data.title}</h2>
        <h4>{data.adult?'Pelicula para adultos':'Pelicula para todas las edades'}</h4>

        <div>
          <h3>Rank</h3>
          <h4>{ data.vote_average }</h4>
        </div>
        
        <div className="genres">
          <h3>Genres:</h3>
          {data.genres?.map(genre => <p key={genre.name}>{ genre.name }</p>)}
        </div>

        

      </div>
    </section>
    
  )
}

export default MoviePage
