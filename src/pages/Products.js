import React from 'react'
import SectionFree from '../components/SectionFree';
import SectionOfertas from '../components/SectionOfertas';
import SectionPaga from '../components/SectionPaga';
import './Products.css'

const Products = () => {
  return (
    <div style={{ padding: '40px 0px', maxWidth: '80%', margin: '0 auto' }}>
      <SectionOfertas />
      <SectionFree />
      <SectionPaga />
    </div>
  )
}

export default Products;