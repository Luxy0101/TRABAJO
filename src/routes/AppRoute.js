import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import GameInfo from '../components/GameInfo'
import Biblioteca from '../pages/Biblioteca'
import Header from '../pages/Header'

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/games/:id' element={<GameInfo />} />
        <Route path='/library' element={<Biblioteca />} />
      </Routes>
    </Router>
  )
}

export default AppRoute