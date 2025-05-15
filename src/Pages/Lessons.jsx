import React from 'react'
import HeaderColor from '../Components/HeaderColor'
import Altheader from '../Components/Altheader'
import { Outlet,Link } from 'react-router-dom'



function Lessons() {
  return (
    <div className='lessons'>
      <HeaderColor/>
      <Altheader/>
      <div className='all'>
          <div className='all-less'>
            <div className='black'><Link to='general'><h1>GENERAL </h1></Link></div>
            <div className='yellow'><h1>ENGLISH</h1></div>
          
          </div>
          <div className='all-less'>
                 <div className='black'><Link to='ielts'><h1>IELTS </h1></Link></div>
            <div className='yellow'><h1>LESSONS</h1></div>
          </div>
          <div className='all-less'>
             <div className='black'><Link to='kid'><h1>ENGLISH </h1></Link></div>
            <div className='yellow'><h1>for KIDS</h1></div>
          
          </div>
          
      </div>
      <br />
       <Outlet/>
     
      Lessons


    </div>
  )
}

export default Lessons