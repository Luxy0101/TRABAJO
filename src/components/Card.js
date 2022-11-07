import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <Link to={`/games/${data.id}`}>
      <div className="card">
        <img src={data.image} alt={data.nombre} className="card-image" />
        <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2 className="card-title">{data.nombre}</h2>
          {
            data.oferta ? (
              <div className="priceGroup">
                <p className="porcentaje">-{data.porcentaje}%</p>
                <div className="prices">
                  <p className="old-price">ARS$ {data.oldPrice}</p>
                  <p className="new-price">ARS$ {data.newPrice}</p>
                </div>
              </div>
            ) :
              <p className="card-description">{data.descripcion}</p>
          }
        </div>
      </div>
    </Link>
  );
};

export default Card;