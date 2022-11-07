import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectJuegos } from '../features/juegosSlice'
import Card from './Card'

const SectionFree = () => {
  const [gamesOff, setGamesOff] = useState([])
  const games = useSelector(selectJuegos)
  useEffect(() => {
    const filtered = games?.filter(game => game.gratis === true)
    setGamesOff(filtered)
  }, [games])
  return (
    <div>
      <h1 className='titulo'>Juegos Gratis</h1>
      <div className='container-productos'>
        {gamesOff?.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default SectionFree