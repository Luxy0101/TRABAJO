import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectJuegos } from '../features/juegosSlice'
import Card from './Card'
import './SectionOfertas.css'

const SectionOfertas = () => {
  const [gamesOff, setGamesOff] = useState([])
  const games = useSelector(selectJuegos)
  useEffect(() => {
    const filtered = games?.filter(game => game.oferta === true)
    setGamesOff(filtered)
  }, [games])
  return (
    <div >
      <h1 className='titulo'>OFERTAS ESPECIALES</h1>
      <div className='container-productos'>
        {gamesOff?.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default SectionOfertas