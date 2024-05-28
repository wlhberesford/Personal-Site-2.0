import React from 'react'
import  { useState, useEffect } from 'react';
import "./typewriter.css"

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  var i = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0,i+1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, i]);

  return displayText;
};


function Typewriter({ text, speed }) {
  const displayText = useTypewriter(text, speed);

  return (
    <div className='Typewrite-Div'>
      <p className='Typed-Text'>{displayText}</p>
    </div>);
};

export default Typewriter
