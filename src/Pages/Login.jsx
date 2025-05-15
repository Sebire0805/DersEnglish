import React from 'react'
import HeaderColor from '../Components/HeaderColor'
import Altheader from '../Components/Altheader'
import { useFormik } from 'formik'
function Login() {
  const formik = useFormik({
     initialValues: {
      username: '',
       email: '',
       age:'',
       password:'',
       confirmpassword:'',
       terms:'',
       
     },
   });
   console.log(formik);
   
  return (
    <div>
      <HeaderColor/>
      <Altheader/>
        <h1>Login page</h1>
    </div>
  )
}

export default Login