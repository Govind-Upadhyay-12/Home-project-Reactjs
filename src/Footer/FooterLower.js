import React from 'react'
import logo from '../images/Screenshot 2023-07-07 034025.png'
import './fot.css';

const FooterLower = () => {
  return (
    <div className='mu'>
        <div className='ew'>
            <img src={logo} width={90} className='o'></img>
            <div className='vb'>
                <h2>Our Vision is to make all people the</h2>
                <h2>best place to live for them</h2>

            </div>


        </div>
        <div className='seco'>
            <div className='hed'>
                <h1>Information</h1>

            </div>
            <div className='adddr'>
                <h3>INDIA, NEW DELHI </h3>
            </div>

            <div className='iy'>
                <li>Property</li>
                <li>Service</li>
                <li>Products</li>
                <li>About us</li>

            </div>
            

        </div>


    </div>
  )
}

export default FooterLower