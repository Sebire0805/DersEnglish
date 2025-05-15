import React from 'react'
import Button from '@mui/material/Button'
import Header from '../Components/Header'
import Altheader from '../Components/Altheader'
import '../Components/style.css'
import lovely from './lovely.webp'
import { useNavigate } from 'react-router-dom'

function Home() {
   const navigate=useNavigate();
   const handleClick=()=>{
      navigate("/contact")
   }
  return (
 <div className='home'>
    <div className='home-one'>
         <Header/>
         <Altheader/>
        <div className='home-two'>
         
            <h1>Welcome my english course</h1>
            <p>Explore work and study opportunities abroad with online English courses designed to suit all adult language learners. </p>
                  <Button variant='contained' onClick={handleClick}>Join us</Button>  
         </div>
    </div>
    <div className='home-why'>
      
       <div className='pic'> 
        <div className='why-head'><h1>Why Choose us</h1></div>
        <img src={lovely} alt="" />
       
       </div>
       <div className='texts'>
               <div className='text'> <h1>Reason 1</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero. Nam eligendi dicta, voluptate quo, </p></div>
                <div className='text'><h1>Reason 2</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero. Nam eligendi dicta, voluptate quo, </p></div>
                <div className='text'><h1>Reason 3</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero. Nam eligendi dicta, voluptate quo, </p></div>
                <div className='text'><h1>Reason 4</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero. Nam eligendi dicta, voluptate quo, </p></div>
        </div>
    </div>

 </div>
  )
}

export default Home