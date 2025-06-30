import React from 'react'
import Play from './Play'
import SentenceAnimation from './SentenceAnimation'
function Game() {
  return (
    <div className='game'>
        
        
        <div className='game-one'>
                     <div className='game-two'>
                            <h1>Word Whiz:English Battle</h1>
                            <h2>Test your English</h2>
                           <SentenceAnimation/>
                      </div>
         <div className='game-play'><Play/></div>
        
     
     
        </div>
        
    </div>
  )
}

export default Game