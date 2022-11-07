import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removedToBiblioteca, selectBiblioteca } from '../features/juegosSlice'
import { TiDelete } from 'react-icons/ti'
import './Biblioteca.css'

const Biblioteca = () => {
  const gamesBiblioteca = useSelector(selectBiblioteca)
  const dispatch = useDispatch()
  return (
    <div className='biblioteca-view'>
      <h1 style={{ color: '#fff' }}>Mi Biblioteca 📚</h1>
      <div className='container-games'>
        {gamesBiblioteca.length !== 0 ? gamesBiblioteca.map(game => (
          <div key={game.id} className='item-biblioteca'>
            <img src={game.image} alt={game.nombre} />
            <div className='trash-item' onClick={() => dispatch(removedToBiblioteca(game))}>
              <TiDelete className='trash-icon' fontSize={25} />
            </div>
          </div>
        )) : <h1>Vacio</h1>}
      </div>
    </div>
  )
}

export default Biblioteca