import React from 'react'
import HeroImg from '../../assets/images/hero.svg'

import './styles.css'

const Hero = (props) => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="Hero"/> 
      <div className="hero-title">
        <span className="hero-title1">
          {props.title1}
        </span>
        <span className="hero-and">{props.and}</span>
        <br/>
        <span className="hero-title2">
          {props.title2}
        </span>
        <div className="hero-subtitle">{props.subtitle}</div>
        <button>Call to Action</button>
      </div>
    </div>
  )
}

export default Hero