import React from 'react'
import Photo from '../images/photogrid.png'
function Hero() {
  return (
    <div>
        <section className='hero'>
            <img src={Photo} alt='grid pic' className='photo-hero'/>
            <h1 className='photo-header'>Online Experiences</h1>
            <p className='photo-text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    </div>
  )
}

export default Hero