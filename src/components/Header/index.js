import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuBurguer from '../BurguerMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

const Header = () => {

  const [open, setOpen] = useState(false);
  
  const handleMenu = () => {
    setOpen(!open);
  }

  return (
    <header className="header">
      <div className="div-logo">
        <Link to="/" alt="Logo" className="logo">SHOP MATE</Link>
      </div>

      <ul className="links">
        <li><Link to="/products" alt="Women">Women</Link></li>
        <li><Link to="/products" alt="Men">Men</Link></li>
        <li><Link to="/products" alt="Kids">Kids</Link></li>
        <li><Link to="/products" alt="Shoes">Shoes</Link></li>
        <li><Link to="/products" alt="Brands">Brands</Link></li>
      </ul>

      <div class="input-icons"> 
        <FontAwesomeIcon className="icon-search" icon={faSearch} />
        <input type="text" className="search" placeholder="Search anything" />
        <FontAwesomeIcon className="icon-close" icon={faTimes} />
      </div>

      <div className="cart-icon">  
        <Link to="/cart" alt="Cart">
          <FontAwesomeIcon className="icon-cart" icon={faShoppingBag} />
        </Link>
      </div>

      <div className="menu-hamburguer">
          <FontAwesomeIcon className="icon-hamburguer" icon={faBars} onClick={handleMenu}/>
      </div>

      <MenuBurguer open={open}/>

    </header>
  )
}

export default Header
