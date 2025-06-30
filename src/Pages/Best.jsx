import React, { useState, useEffect } from 'react';
function Best() {
  const images = [
    
    'https://www.global-english.com/download.php?type=EVENTIMAGE&id=151',
    'https://bridge.edu/tefl/blog/wp-content/uploads/2024/09/Student-Reward-Systems.jpg',
    'https://i.guim.co.uk/img/media/14126055e14ff95c1c889e08bb2999ccfc4f1422/0_340_5616_3371/master/5616.jpg?width=465&dpr=1&s=none&crop=none'
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
     
    <div className='test'>
               <h1 style={{color:'transparent'}}>SSSS</h1>
          <div  style={{ width: '100%',height:'100%', margin: '0 auto', textAlign: 'center' }}>
               <img src={images[current]} style={{ width: '100%',height:'100%', borderRadius: '10px', transition: '0.5s' }}/>
         </div>
     
    </div>
  );
}

export default Best;