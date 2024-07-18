import React from 'react'
import "./navbar.css"
import headshot from "../../img/HeadShotW24.jpg"


function Navbar() {
  return (
    <div className='Nav-Bar'dark-mode = "true">
        <div className='Nav-Left'dark-mode = "true">
            <p className='Nav-Name'>Liam Beresford</p>
        </div>
        <div className='Nav-Right'>
        <div className='My-Img-Div'>
                <img className ='My-Img' src={headshot} alt='OH NO I FORGOT A PITURE HERE' />
            </div>
        </div>

        
    </div>
  )

}

export default Navbar

