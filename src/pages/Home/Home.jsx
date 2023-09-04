import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const texts = ["hello","नमस्ते","bonjour","مرحبًا", "hola", "ciao","olá","hallo","Привет","你好","こんにちは","안녕하세요"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Start fade out animation
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimate(true); // Start fade in animation
      }, 800); // Wait for 700ms for the fade out animation to complete

    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='home-body'>
      <h1 className={`home-h1 ${animate ? 'fadeIn' : 'fadeOut'}`}>{texts[currentTextIndex]}</h1>
    </div>   
    </>
    
  );
}

export default Home;
