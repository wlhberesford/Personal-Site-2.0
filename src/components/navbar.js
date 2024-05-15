import React from 'react'

function Navbar() {
  return (
    <div className='Nav-Bar'dark-mode = "true">
        <div className='Nav-Left'dark-mode = "true">
            <p className='Nav-Name'>Liam Beresford</p>
        </div>
        <div className='Nav-Right'>
            <ul className='Nav-List'>
                <li className='Nav-Item'>About Me</li>
                <li className='Nav-Item'>Experience</li>
                <li className='Nav-Item'>Contact</li>


            </ul>
        </div>

        
    </div>
  )
}

export default Navbar
