import React from 'react'
import { Link } from 'react-router-dom'

const MenuBurguer = ({open}) => {

  return (
    open && 
    <div className="menu-lateral">
      <ul className="links-lateral">
        <li><Link to="/products" alt="Women">Women</Link></li>
        <li><Link to="/products" alt="Men">Men</Link></li>
        <li><Link to="/products" alt="Kids">Kids</Link></li>
        <li><Link to="/products" alt="Shoes">Shoes</Link></li>
        <li><Link to="/products" alt="Brands">Brands</Link></li>
      </ul>
    </div>
  
  )
}

export default MenuBurguer;
