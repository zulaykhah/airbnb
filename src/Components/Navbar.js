import React from 'react'
import AirbnbLogo from '../images/airbnb.png'
function Header() {
  return (
    <div>
        <nav className='bnblogo'>
        <img src={AirbnbLogo} alt='airbnb' className='logo'/>
        <p>airbnb</p>
        </nav>
    </div>
  )
}

export default Header