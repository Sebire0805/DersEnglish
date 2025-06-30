import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import { RegistrForm } from './RegistrForm';
import message from './message.webp'
import OutlinedInput from '@mui/material/OutlinedInput';
import { FormControl } from '@mui/material';
import Form from './Form';


function Contact() {
  const formik = useFormik({
       initialValues: {
        username: '',
         email: '',
         password:'',
         confirmpassword:'',
         terms:''
       },
       validationSchema:RegistrForm
     });
     console.log(formik.errors);
  return (
    <div className='contact'>
      
      <div className='contact-one'>
            <div className='contact-text'>
                <h1 >Contact us</h1>
                <div className='icon'>
                  <CallIcon style={{fontSize:'3rem',}} />
                   +994 (51) 452 33 71
                </div>
                
                <div className='icon'>
                  <EmailIcon style={{fontSize:'3rem'}} />
                    <a className='foot-link' href='mailto:saidaagayeva109@gmail.com' style={{color:'black'}}>saidaagayeva109@gmail.com</a>
                </div>
                <div className='icon'>
                  <HomeIcon style={{fontSize:'3rem'}} />
                   Baku city
                </div>
            </div>
 <div className='contact-form'>
                    
           <Form/>
              
            </div>
      </div>
    
    </div>
  )
}

export default Contact