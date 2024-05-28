import React, { useState } from 'react'
import './hovercard.css'

export default function Hovercard({ title, pic, text }) {
    const [viewText, changeView] = useState(false); 


    return(

        <div className='Drop-Down-Card' onClick={() => changeView((prev) => !prev)}>

            <div className='Card-Div'>
                <div className='Card-Img-Div' >
                    <img className="Card-Img" src={pic} alt="PUT IMAGE HERE"/>
                </div>
                <h3 className='Card-Title'>{title}</h3>
            </div>

            {viewText && 
            <div className='Card-Dropdown'>
                <div className='Text-Overline'></div>
                <p className='Card-Text'> {text} </p>
            </div>
            }   

        </div>

    );

}

