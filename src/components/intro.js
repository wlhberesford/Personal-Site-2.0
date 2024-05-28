import React from 'react'
import Typewriter from './typewriter.js'
import './intro.css'

function Intro() {
  return (
    <div className='Intro-Body'>
        <div className='Intro-Content'>
            <div className='My-Img-Div'>
                <img className ='My-Img' src='https://faculty.rpi.edu/sites/default/files/2021-12/kuzmik2%2540rpi.edu_KonstantinKuzmin_Square.jpg' alt='OH NO I FORGOT A PITURE HERE' />
            </div>
            <div className='Intro-Text-Div'>
                <div className='Main-Type-Div'>
                    <Typewriter  text={"Hi, I'm Liam"}/>
                </div>
                <div className='Sub-Type-Div'>
                    <Typewriter  text={"Computer Science and Economics Student"} delay={100}/>
                </div>
            </div>
        </div>
    </div>
    
  )
}



export default Intro
