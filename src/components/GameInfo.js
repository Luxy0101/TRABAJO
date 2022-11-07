import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addBiblioteca, getGameInfo } from '../features/juegosSlice'
import './GameInfo.css'

const GameInfo = ({ data }) => {
  const { id } = useParams()
  const gameDetail = useSelector((state) => state.juegos.gameDetail)
  const dispatch = useDispatch()
  useEffect(() => {
    const getProduct = () => {
      dispatch(getGameInfo(id))
    }
    getProduct()
  }, [dispatch, id])
  return (
    <div className='product-detail-view'>
      {gameDetail &&
        <div style={{ maxWidth: '75%', margin: '0 auto' }}>
          <div className='product-detail-body' key={gameDetail.id}>
            <h1>{gameDetail.nombre}</h1>
            <div className='product-detail-flex'>
              <div className="bg-image">
                <img className='product-detail-image' src={gameDetail.image} alt={gameDetail.nombre} />
              </div>
              <div className='product-detail-info'>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>{gameDetail.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='section-comprar'>
            <h2>{gameDetail.nombre}</h2>
            <div className='section-btn'>
              {gameDetail.newPrice && <p>${gameDetail.newPrice}</p>}
              <button className='btn-comprar'>Comprar</button>
              <button onClick={() => dispatch(addBiblioteca(gameDetail))} className='btn-añadir-biblioteca'>Añadir a Biblioteca</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default GameInfo