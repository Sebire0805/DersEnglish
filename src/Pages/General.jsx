import React from 'react'
import poc from "./poc.jpg"
import Button from '@mui/material/Button'
function General() {
  return (
    <div className='general'>
     <div className='gen-poc'><img src={poc} alt="" /></div>
     <div className='gen-text'>
         <h1>CHOOSE YOUR LESSONS</h1>
         <h2>Learn English Step by Step</h2>
       <h3>Our carefully designed lessons help you build your 
               English skills from the basics
             to advanced levels. Whether you're a beginner or looking 
            to improve your fluency,we’ve got the right lesson for you!</h3>
     <Button variant='contained' color='warning'>General english lessons</Button>
     <Button variant='contained' color='warning'>IELTS Prepare lessons</Button>
     <Button variant='contained' color='warning'> English lessons for Kids</Button>
     </div>
    </div>
  )
}

export default General