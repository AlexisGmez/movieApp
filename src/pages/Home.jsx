import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataApiThunk } from '../store/slices/apiInfoSlice';
import Card from './components/Card';
import './styles/Home.scss';
const Home = () => {


  const dispatch = useDispatch();

  const data = useSelector( state => state.apiData )

   
  useState(()=>{
    dispatch( getDataApiThunk() );
  },[])

  
  
  console.log(data)
  return (
    <section className='movies__main'>
      {
        data?.map(movie => <Card key={movie.id} movie={ movie } /> ) 
      }
    </section>
  )
}

export default Home
