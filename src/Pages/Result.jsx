import Button from '@mui/material/Button';        
function Result({score,questionCount}) {
  return (
    <div className='result'>
       <h1>You got {score}/{questionCount} on your exam</h1>
       <h1 style={{fontSize:'2rem'}}>
          {score ==0
             ? '🤬'
             : (score==1) || (score==2) ? '😐'
             : '😁'
          }
       </h1>
       <Button variant='contained' onClick={()=>window.location.reload()}>Start again</Button>
    </div>
    )
}

export default Result