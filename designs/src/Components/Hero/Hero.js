import React from 'react'
import "../Hero/Hero.css"
import img from "../Images/hero.png"

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <h2>Find The Best <br/>Fashion Style <br/>For you</h2>
            <h4>ChicFemme has something for every occasion.<br/>From elegant dresses and skirts to stylish tops  <br/> Our website offers a wide range of options. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explore our collection today!
</h4>
            </div>
            <div className='hero-img'>
                <img src={img} alt='' />
                
            </div>
    
    
    </div>
  )
}

export default Hero
