import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="container-tarjeta">
      <div style={{ height: '150px', width: '250px', minWidth: '150px', objectFit: 'cover' }}>
        <img style={{ height: '100%', width: '100%' }} src={data.image} alt="imagen" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#5200ff', padding: '15px' }}>
        <h3 style={{ color: '#fff' }}>{data.nombre}</h3>
        <div style={{ width: 'fit-content', display: 'flex', backgroundColor: 'green', alignItems: 'center' }}>
          <p style={{ padding: '0px 5px', fontSize: '20px', color: 'greenyellow', fontWeight: 'bold' }}>-{data.porcentaje}%</p>
          <div style={{ fontSize: '13px', backgroundColor: 'grey', padding: '2px 10px', color: 'greenyellow', display: 'flex', flexDirection: 'column' }}>
            <p style={{ textDecoration: 'line-through' }}>${data.precio}</p>
            <p>${data.descuento}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Card;