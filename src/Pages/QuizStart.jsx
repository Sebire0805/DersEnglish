import React from 'react'
import Quiz from './Quiz'
import { useState } from 'react'
import Button from '@mui/material/Button';
import kuiz from "./kuiz.jpg"
import purple from './purple.jpg'

function QuizStart() {
     const [isStarted, setIsStarted] = useState(false)
  return (
    <div className='quizstart' >
      
        <div className="main" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'3rem'}}>
      {
        isStarted 
        ?
        <Quiz/>
        :
        <div className='quiz-one'>
          <div className='quiz-one-img'> 
              <img  src={purple} alt="" />
          </div>
          
             <div className='quiz-one-two'>
                     <img src={kuiz} alt="" />
                   <h1>Ready to be challenged?</h1>
                  <h2>Test your English skills and have fun!</h2>
                 <Button variant='contained' onClick={()=>setIsStarted(!isStarted)}>Start Quiz</Button>
             </div>
           
          
    
        </div>
      }
      
      
    </div>
       


    </div>
    
  )
}

export default QuizStart
