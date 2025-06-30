import React, { useState } from 'react';
import Joy from './joy.jpg'
function Test() {
  const [current, setCurrent] = useState(0);

  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOgLhqXxde3degdRNogL9Jtzh1We7TTxErQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32EeXEIy7vAzMHBL6eJMurcujS4wEsNXLhA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OyrVa_OIdDPHuzFTiJo8F8btQHovXcJupQ&s',
    Joy
    
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='test'>
      
        <div style={{ width: '80%',height:'100%', margin: '0 auto', textAlign: 'center' }}>
            <button onClick={prevSlide}>Əvvəlki</button> 
            <img src={images[current]} style={{ width: '90%',height:'90%', borderRadius: '10px' }} />
            <button onClick={nextSlide} style={{ marginLeft: '10px' }}> Növbəti </button>
         </div>
    </div>
  );
}

export default Test;