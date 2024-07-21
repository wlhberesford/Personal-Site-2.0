import React from 'react'
import Hovercard from '../Hovercard/hovercard'
import './description.css'
import Empac from '../../img/empac.jpg'
import Optumn from '../../img/uhg_optum_logo.jpg'
import Munch from '../../img/Munch_logo_v1.png'

function Description(){
    return (
      <div className='Description-Div'>
        <div className='Desc-Title-Div'>
            <h2 className='Desc-Title-Text'>About Me</h2>
        </div>
    
        <div className='Desc-Body'>
            <div className='Desc-Card'>
                <Hovercard title="Education" 
                text="My education path has been driven by my goal to find my 
                    place in a career as a problem solver. Currently, I am a 
                    Computer Science and Economics dual major at Rensselaer 
                    Polytechnic Institute (RPI). I plan to leverage my problem-solving 
                    and computation from CS with an understanding of data and human 
                    systems from economics. I believe this intersection of subjects allows 
                    for large systems of human interaction to be made efficient in a way 
                    that benefits the people. To do this I have been focusing my classes in 
                    CS around data, AI, and machine learning, and for Economics, I have been 
                    focusing my courses on Game Theory and Econometrics. " 
                pic={Empac}/>
            </div>
            <div className='Desc-Card'>
                <Hovercard title = "Experience" 
                text = "This summer (2024), I interned with Optum, part of United 
                        HealthGroup. During this internship, I helped start and 
                        deploy an application leveraging AI to create human-like 
                        conversation for automated calls to health providers. My 
                        main roles in this project have been: creating a MySQL database 
                        hosted on an AWS RDS server and implementing this server within 
                        the backend, creating an algorithmic approach to evaluate AI-made
                         calls to provide a deterministic metric to evaluate calls, and 
                         leading the front-end development to create a front page for 
                         the app that follows company brand guidelines."
                pic={Optumn} />
            </div>
            <div className='Desc-Card'>
                <Hovercard title = "Projects" 
                text = "I've started to put more emphasis on projects made on my own time.
                        Starting spring of 2024 I began a project through the Rensselaer Center for
                        Open Source called Munch. This web app is designed to create a better
                        user experience for the dining halls at RPI. A minimal viable product
                        is currently being made to reduce the time to see current options at dining 
                        halls from 5 minutes to less than a minute. Future features will add accounts
                        and a rating system that could potentially provide feedback to the dining halls."
                pic={Munch} />
            </div>
        </div>
        
      </div>
    )

};

export default Description

