import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MoviePage from '../pages/MoviePage'

const RouterApp = () => {
  return (
    <Routes>

      <Route path='/' element={ <Home />} />
      <Route path='/*' element={ <Navigate to='/' /> } />
      <Route path='/movie/:id' element={ <MoviePage /> } />
      
    </Routes>
  )
}

export default RouterApp
