import react from 'react'
import Button from '@mui/material/Button';
function Question({questionss,handleQuiz}) {

  return (
    <div key={questionss.id}>
        <h1>{questionss.question}</h1>
        
        <div style={{display:"flex",gap:"1rem"}}>
            {
                questionss.options.map((option,index)=>(
                    
                    <Button variant='contained'  key={index} onClick={()=>handleQuiz(option)}>
                        <span>{option}</span>
                    </Button>
                ))
            }
            
        </div>
    </div>
  )
}

export default Question