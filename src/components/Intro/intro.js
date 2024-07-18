import React from 'react'
import Typewriter from '../Typewriter/typewriter.js'
import './intro.css'

function Intro() {
  return (
    <div className='Intro-Body'>
        <div className='Intro-Content'>
            
            <div className='Intro-Text-Div'>
                <div className='Main-Type-Div'>
                    <Typewriter  align='center' text={"Hi, I'm Liam"}/>
                </div>
                <div className='Sub-Type-Div'>
                    <Typewriter  text={"Computer Science and Economics Student"}/>
                </div>
            </div>
        </div>
    </div>
    
  )
}



export default Intro
