import React from 'react'
import Button from '@mui/material/Button'
import HeaderColor from '../Components/HeaderColor'
import Altheader from '../Components/Altheader'
import { useState } from 'react'
import saida from './said.jpg'
import student from './student1.jfif'
function About() {
  const [showMore, setShowMore] = useState(false);
  const toggleText=()=>{
    setShowMore((prev)=>!prev)
  }
  return (
    <div className='about'>
        <div className='about-one'>
             <HeaderColor/>
             <Altheader/>
            <div className='about-two'>
                 <div className='about-text'>
                     <h1>Saida Aghayeva</h1>
                     <p>I have been working as English instructor for 3 years, and I newly started to gain experience on IELTs and pre-IELTs, as well as duolingo</p>
                     {
                  showMore && (
                    <p>I have been teaching for over 5 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Explicabo quos maiores culpa architecto itaque commodi accusantium aut cum in non temporibus voluptatibus 
                      rerum magni vel dolorem pariatur, perspiciatis iste sit. </p>
                  ) }
                  <Button variant='contained' onClick={toggleText}>
                    {showMore ?"Read less" : "Read more"}
                  </Button>
                 </div>
                
                 
                  
        
                <div className='about-pic'> <img src={saida} alt="" /></div>
            </div>
        </div>
            <div className='about-three'>
              <div  className='about-what'><h1>What people are saying?</h1></div>
              <div className='about-students'>
                   <div className='about-student'>
                    <img src={student} alt="" />
                    <h1>Nezrin </h1>
                    <p>This course changed my life!</p>
                   </div>
                    <div className='about-student'>
                      <img src={student} alt="" />
                    <h1></h1>
                    <p></p>
                    </div>
                     <div className='about-student'>
                      <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                     </div>
                      <div className='about-student'>
                        <img src="" alt="" />
                       <h1></h1>
                       <p></p>
                      </div>
              </div>
            </div>
    </div>
  )
}

export default About