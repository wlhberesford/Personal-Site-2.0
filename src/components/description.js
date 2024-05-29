import React from 'react'
import Hovercard from './hovercard'
import './description.css'
import Empac from '../img/empac.jpg'
import Optumn from '../img/uhg_optum_logo.jpg'

function Description(){
    return (
      <div className='Description-Div'>
        <div className='Desc-Title-Div'>
            <h2 className='Desc-Title-Text'>About Me</h2>
        </div>
    
        <div className='Desc-Body'>
            <div className='Desc-Card'>
                <Hovercard title="Education" 
                text="I am currently a Computer Science and Economics dual major at 
                    Rensselaer Polytechnic Institute (RPI) with a concentration in 
                    Machine Learning/ AI and Data. I plan on graduating 
                    December 2025 and getting my masters in Economics at RPI by 
                    December 2026." 
                pic={Empac}/>
            </div>
            <div className='Desc-Card'>
                <Hovercard title = "Experience" 
                text = "This Summer I am an intern with Optum, part of United 
                    HealthGroup. In addition to class work I am leading the 
                    development of Munch, a web app with the goal of improving
                    UX for those who use the dining halls at RPI. "
                pic={Optumn}
                />
            </div>
        </div>
        
      </div>
    )

};

export default Description

