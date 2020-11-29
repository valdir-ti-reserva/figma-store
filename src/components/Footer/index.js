import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './styles.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="links-footer">
        <ul className="links-list">
          <li><Link to="/products" alt="Women">Women</Link></li>
          <li><Link to="/products" alt="Men">Men</Link></li>
          <li><Link to="/products" alt="Kids">Kids</Link></li>
          <li><Link to="/products" alt="Shoes">Shoes</Link></li>
          <li><Link to="/products" alt="Brands">Brands</Link></li>
        </ul>
      </div>
      <div className="links-social">
        <ul className="social-list">
          <li>
            <Link to="/products" alt="Women">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link to="/products" alt="Men">
              <FontAwesomeIcon className="icon" icon={faPinterest} />
            </Link>
          </li>
          <li>
            <Link to="/products" alt="Kids">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to="/products" alt="Kids">
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </Link>
          </li>
        </ul>        
      </div>
      <div className="links-right">
        <ul className="links-right-list">
          <li><Link to="/" alt="Home">@2020 Figma Store</Link></li>&#9679;&nbsp;&nbsp;
          <li><Link to="/contact" alt="Contact">Contact</Link></li>&#9679;&nbsp;&nbsp;
          <li><Link to="/privacy" alt="Privacy">Privacy</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
