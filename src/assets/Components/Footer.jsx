import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <div className='footer'> 
      <div className='foot-one'>
        <a  className='foot-link' href="https://www.instagram.com/englishwithsaida__" target="_blank" rel="noopener noreferrer" >
          <InstagramIcon style={{fontSize:'2rem'}}/>englishwithsaida__</a>
        <a  className='foot-link'  href="https://www.youtube.com/@englishwithsaidaa"  target="_blank"  rel="noopener noreferrer" >
          <YouTubeIcon style={{fontSize:"2rem"}}/> Saida Aghayeva</a>
      </div> 

      <hr />

      <div className='foot-one'>
        <a 
          className='foot-link' 
          href="https://az.linkedin.com/in/saida-a%C4%9Fayeva-821443253" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon style={{fontSize:"2rem"}}/>LinkedIn
        </a>
        <a 
          className='foot-link' 
          href="https://web.telegram.org/k/#@Saida_Aghayeva_LearningEnglish" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <TelegramIcon style={{fontSize:"2rem"}}/>Telegram
        </a>
      </div> 

      <hr />

      <div className='foot-one'>
        <Link className='foot-link' to='/about'>About</Link>
        <Link className='foot-link' to='/contact'>Contact</Link>
        <Link className='foot-link' to='/lessons'>Lessons</Link>
      </div>
    </div>
  )
}

export default Footer;