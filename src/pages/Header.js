import React, { useState } from "react";
import './Headers.css'
import logo from '../images/steamlogo.png'
import { IoLibrarySharp } from 'react-icons/io5'

import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="container-header">
      <div className="header-content">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '26px'
        }}>
          {/* <FaShoppingCart fontSize={25} color={'#fff'} /> */}
          {/* <Link to='/library'>
            <IoLibrarySharp fontSize={25} color={'#fff'} />
          </Link> */}
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <ul className="container-registro">
          <li onClick={() => setOpen(!open)}>Categorias</li>
          {open && (
            <div className="container-drop-down">
              <div className="drop-down">
                <h4>Géneros</h4>
                <div className="container-items-drop-down">
                  <div className="items-drop-down">
                    <p>Accion</p>
                    <p>Gratis</p>
                    <p>Aventura</p>
                  </div>
                  <div className="items-drop-down">
                    <p>Terror</p>
                    <p>Estrategia</p>
                    <p>Carreras</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <li>Noticias</li>
          <Link to='/library' style={{ color: 'currentcolor' }}>
            <li>Biblioteca</li>
          </Link>
          <Link to='/' style={{ color: 'currentcolor' }}>
            <li>Inicio</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;