import React from 'react'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import saida from './myteac.jpg'
import student from './student1.jfif'
import boy from './boy.avif'
import girl from './girl.jpg'
import badboy from './badboy.jpg'
import sari from './sariqiz.jpg'
import AboutSection from './AboutSection'

import SchoolIcon from '@mui/icons-material/School';
function About() {
  const [showMore, setShowMore] = useState(false);
  const toggleText=()=>{
    setShowMore((prev)=>!prev)
  }
  const [clickMore, setClickMore] = useState(false);
  const toggleBtn=()=>{
    setClickMore((prev)=>!prev)
  }
  return (
    <div className='about'>
      
        <div className='about-one'>
             
            <div className='about-two'>
                
                <AboutSection/>
                
                <div className='about-pic'> <img src={saida} alt="" />
                
                       <div className='about-btn'> 
                  <Button variant='contained' className='speak1' color='info'>Join My Course</Button>
                   <Button variant='contained' className='speak' color='warning'>Speak English Fluently</Button>
                   <Button variant='contained' color='success' className='speak1'>Let's Improve</Button>
                   <Button variant='contained' color='error' className='speak'> English lessons for Kids</Button>  
                        </div>
                </div>
                 
            </div>
        </div>
            <div className='about-three'>
              <div  className='about-what'><h1>What people are saying?</h1></div>
              <div className='about-students'>
                   <div className='about-student'>
                    <img src={student} alt="" />
                    <h1>Nezrin </h1>
                    <h3>Saida teacher makes me motivated</h3>
                   </div>
                    <div className='about-student'>
                      <img src={boy} alt="" />
                    <h1>Raul</h1>
                    <h3> I enjoy during my  english lessons</h3>
                    </div>
                     <div className='about-student'>
                      <img src={sari} alt="" />
                    <h1>Maryam</h1>
                    <h3>This course changed my life!</h3>
                     </div>
                      <div className='about-student'>
                        <img src={badboy} alt="" />
                       <h1>Yusif</h1>
                       <h3>I have improved my english level </h3>
                      </div>
                      
             {     clickMore && (
              <div className='about-more'>
                      <div className='about-student'>
                      <img src={girl} alt="" />
                    <h1>Sebire</h1>
                    <h3>She is my favorite english teacher</h3>
                     </div>
                      <div className='about-student'>
                        <img src={badboy} alt="" />
                       <h1>Taleh</h1>
                       <h3>I offer to all my friends this teacher</h3>
                      </div>
                      </div>
                  ) }  
                  <Button  variant='contained' onClick={toggleBtn}>
                    {clickMore ?"Read less" : "Read more"}
                  </Button>
                     
                    
              </div>
            </div>
    </div>
  )
}

export default About