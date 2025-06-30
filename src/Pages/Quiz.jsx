
import  { useState } from 'react'
import Result from './Result'
import Question from './Question'
import Play from './Play'

function Quiz() {
    const questions=[
        {
            "id":1,
            "question":"What is ...name?",
            "options":['he','she','his','mather'],
            "answer":'his'
        },
        {
            "id":2,
            "question":"Choose the opposite of big?",
            "options":['Tall','Huge','Small','Long'],
            "answer":'Small'
        },
        {
            "id":3,
            "question":"What is the plural of  'child'? ",
            "options":['Childs','Children','Childes','Childer'],
            "answer":'Children'
        },
        {
            "id":4,
            "question":"What is the correct sentence?",
            "options":['She can to swim','She cans swims','She can swim','She can swimming'],
            "answer":'She can swim'
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false)

    const handleQuiz=(selectedOption)=>{

        if (questions[currentQuestion].answer==selectedOption) {
            setScore(score+1);
        }
        const nextQuestion= currentQuestion+1;
        if (nextQuestion<questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowResult(true);
        }
        console.log(score)
    }
  return (
    <>
    {
        showResult 
        ?
        <Result score={score} questionCount={questions.length}/>
        :
        <Question questionss={questions[currentQuestion]} handleQuiz={handleQuiz}/>
    }
    
    </>
  )
}

export default Quiz