import React from 'react'
import Button from '@mui/material/Button'
import '../assets/Components/style.css'
import lovely from './lovely.webp'
import { useNavigate } from 'react-router-dom'
import group from './group.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons'


function Home() {
   const navigate=useNavigate();
   const handleClick=()=>{
      navigate("/contact")
   }
  return (
 <div className='home'>
    <div className='home-one'>
         
        <div className='home-two' >
         
            <h1>Welcome my english course</h1>
            <p>Explore work and study opportunities abroad with online English courses designed to suit all adult language learners. </p>
                  <Button variant='contained' color='warning' onClick={handleClick}>Join us</Button>  
         </div>
    </div>
    <div className='home-why'>
      
       <div className='texts'> 
        <div className='why-head'><h1>Why Choose us</h1></div>
           <div className='metn'>
            <div className='metn-one'><h3>Fun and Easy Learning</h3><h3><FontAwesomeIcon icon={faSmile}/> </h3></div>
             <div className='metn-one'><h3>Lessons Just for You</h3><h3><FontAwesomeIcon icon={faChalkboardTeacher} /></h3></div>
              <div className='metn-one'><h3>See Your English Improve</h3><h3><FontAwesomeIcon icon={faChartLine}/></h3></div>
               <div className='metn-one'><h3>Friendly and Skilled Teacher </h3><h3><FontAwesomeIcon icon={faHandsHelping}/></h3></div>
           </div>
       
       </div>
             <div className='pic'>
                 <img src={group} alt="" style={{width:'100%',height:'100%'}} />
             </div>
    </div>

 </div>
  )
}

export default Home