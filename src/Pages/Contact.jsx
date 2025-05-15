import React from 'react'
import HeaderColor from '../Components/HeaderColor'
import Altheader from '../Components/Altheader'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div className='contact'>
      <HeaderColor/>
       <Altheader/>
      <div className='contact-one'>
            <div className='contact-text'>
                <h1 style={{fontSize:'4rem'}}>Contact us</h1>
                <div className='icon'>
                  <CallIcon style={{fontSize:'3rem'}} />
                   +994 (51) 452 33 71
                </div>
                <div className='icon'>
                  <HomeIcon style={{fontSize:'3rem'}} />
                   Baku city
                </div>
                <div className='icon'>
                  <EmailIcon style={{fontSize:'3rem'}} />
                    <a className='foot-link' href='mailto:saidaagayeva109@gmail.com'>saidaagayeva109@gmail.com</a>
                </div>
            </div>
            <div className='contact-form'>
              
            </div>
      </div>
    </div>
  )
}

export default Contact