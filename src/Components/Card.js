import React from 'react'
import picture from '../images/photo1.jpg'
import pic from '../images/star.png'
function Card(props) {
  return (
    <div className='card'>
        <div className='card_pic'>
        <img src={picture} alt='grid pic' className='grid_photo'/>
        <img src={picture} alt='grid pic' className='grid_photo'/>
        <img src={picture} alt='grid pic' className='grid_photo'/>
        </div>
        {/* <img src={pic} alt='star icon'/> */}
        <div className='icon'>
        <img src={pic} alt='star icon' className='card_icon'/>
        <span className='grid_text'>5.0</span>
        <span className='grid_text'>(6).</span>
        <span className='grid_text'>USA</span>
        <span className='secondgrid_text'>3.0</span>
        <span className='secongrid_text'>(4).</span>
        <span className='secongrid_text'>UK</span>
        </div>
        <p className="p_text">Life Lessons with Katie Zaferes</p>
        <p className='p_text'> <span className='bold'>From $136</span> / person</p>
        {/* <div className='secondp_text'>
        <p className='secondp_text'>Life Lessons</p>
        <p className='secondp_text'><span className='bold'>From $132</span> / person</p>
        </div> */}
    </div>
  )
}

export default Card