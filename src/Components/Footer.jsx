import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'> 
      <div className='foot-one'>
          <Link className='foot-link' to="https://www.instagram.com/englishwithsaida__"> Instagram</Link>
          <Link className='foot-link' to="https://www.youtube.com/@englishwithsaidaa">Youtube </Link>
          <Link className='foot-link' to="https://az.linkedin.com/in/saida-a%C4%9Fayeva-821443253">LinkedIn</Link>
          <Link className='foot-link' to="https://web.telegram.org/k/#@Saida_Aghayeva_LearningEnglish">Telegram</Link>
      </div>
      <div className='foot-one'>
        <Link to="">Address</Link>
        <Link></Link>

      </div>
       <div className='foot-one'>
        

      </div>
      
    </div>
  )
}

export default Footer