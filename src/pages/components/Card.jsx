import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Card.scss';


const Card = ( { movie } ) => {
  
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  return (
    <article className='card'>
      <div className='card__image'>
        <img src={`${IMAGE_PATH}${movie.backdrop_path}`} alt="" />
      </div>
      
      <div className="card__info">
        <h2>{ movie.title }</h2>
        <Link to={`/movie/${movie.id}`} className='button'>Read more</Link >
      </div>
    </article>
  )
}

export default Card
