import React from 'react'
import Card from '../components/Card';
import { productosStore } from '../data/productosStore';
import './Products.css'

const Products = () => {
  return (
    <div style={{ margin: '40px' }}>
      <h1 className='titulo'>OFERTAS ESPECIALES</h1>
      <div className='container-productos'>
        {productosStore.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Products;