import React from 'react'
import Quiz from './Quiz'
import { useState } from 'react'
import HeaderColor from '../Components/HeaderColor'
import Altheader from '../Components/Altheader'
import Button from '@mui/material/Button';

function QuizStart() {
     const [isStarted, setIsStarted] = useState(false)
  return (
    <div className='quizstart'>
      <HeaderColor/>
      <Altheader/>
        <div className="main">
      {
        isStarted 
        ?
        <Quiz/>
        :
        <div>
            <h1>Welcome </h1>
            <Button variant='contained' onClick={()=>setIsStarted(!isStarted)}>Start Quiz</Button>
        </div>
      }
    </div>
  


    </div>
    
  )
}

export default QuizStart
