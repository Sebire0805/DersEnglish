import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import Button from '@mui/material/Button'
import General from './General';
import Ielts from './Ielts';
import Kid from './Kid';
import Best from './Best';

function Lessons() {
  return (
    <div className='lessons'>
           <General/>
                 <Best/> 
      <br />
       <Outlet/>
     
     


    </div>
  )
}

export default Lessons