import React from "react";
import './Headers.css'
import logo from '../images/steamlogo.jpg'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <div className="header-content">
        <img className="logo" src={logo} alt="Logo" />
        <div className="buscador">
          <input placeholder="Buscar" type="text" />
          <FaSearch className="buscador-icono" fontSize={18} />
        </div>
        <ul className="container-registro">
          
            <FaShoppingCart fontSize={30} />
          
        </ul>
      </div>
    </div>
  );
}

export default Header;