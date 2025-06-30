import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import VideoSettingsTwoToneIcon from '@mui/icons-material/VideoSettingsTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


function Altheader() {
   const [menuOpen, setMenuOpen] = useState(false)
   const toggleMenu=()=>setMenuOpen(!menuOpen);
  return (
    <div className='altheader'>
        <nav>
                     <button className='hamburger' onClick={toggleMenu}>
                                  <GiHamburgerMenu />
                       </button>
                    <div className={`links ${menuOpen ? 'open' : ''}`}>
                        <Link className='link' to='/lessons'><AutoStoriesIcon style={{fontSize:'2rem'}}/> Lessons</Link>
                        
                        <Link className='link'  to='/Videos'><VideoSettingsTwoToneIcon style={{fontSize:'2rem'}}/> Videos</Link>
                        <Link className='link'  to='/Quiz'> <QuizTwoToneIcon style={{fontSize:'2rem'}} />Quiz</Link>
                        <Link className='link'  to='/Game'> <SportsEsportsIcon style={{fontSize:'2rem'}} />Game</Link>
                         <Link className='link'  to='/LessonBooking'><CalendarMonthIcon style={{fontSize:'2rem'}} /> LessonBooking</Link>
                    </div>
              </nav>
            </div>

    
  )
}

export default Altheader