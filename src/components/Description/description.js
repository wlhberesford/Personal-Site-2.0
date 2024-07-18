import React from 'react'
import Hovercard from '../Hovercard/hovercard'
import './description.css'
import Empac from '../../img/empac.jpg'
import Optumn from '../../img/uhg_optum_logo.jpg'

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
                    Machine Learning/ AI and Data. I am on track to earn my bachlors
                    degree in December 2025 and my masters in Economics at RPI in 
                    December 2026." 
                pic={Empac}/>
            </div>
            <div className='Desc-Card'>
                <Hovercard title = "Experience" 
                text = "This Summer I am an intern with Optum, part of United 
                    HealthGroup. During this internship I helped start and 
                    deploy an application leveraging AI to create human like 
                    conversation for automated calls to health providers. 
                    During the expeience I built a UI for the application, created 
                    an AWS database to log call information and used AI for sentiment
                    analysis and creating call summaries."
                pic={Optumn} />
            </div>
            <div className='Desc-Card'>
                <Hovercard title = "Projects" 
                text = "I've started to put mor enphasis on projects made on my own time.
                        Starting spring 2024 I began a project through Rensselaer Center for
                        Open Source called Munch. This web app is designed to create a better
                        user experience for the dining halls at RPI. A minimal viable product
                        is currently being made to reduce time to see current options at dining 
                        halls from 5 minutes to less than a minute. Future features will add accounts
                        and rating system that could potenially provide feeback to the dininghalls."
                pic={Optumn} />
            </div>
        </div>
        
      </div>
    )

};

export default Description

