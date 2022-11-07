import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectJuegos } from '../features/juegosSlice'
import Card from './Card'

const SectionPaga = () => {
  const [gamesMoney, setgamesMoney] = useState([])
  const games = useSelector(selectJuegos)
  useEffect(() => {
    const filtered = games?.filter(game => game.top === 1)
    setgamesMoney(filtered)
  }, [games])
  return (
    <div >
      <h1 className='titulo'>Los más Vendidos</h1>
      <div className='container-productos'>
        {gamesMoney?.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default SectionPaga