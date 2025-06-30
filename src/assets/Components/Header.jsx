import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <nav>
              
            <Link className='link' to='/'>English Course</Link>
            <div className='links'>
                <Link className='link' to='/about'>About</Link>
                <Link className='link'  to='/contact'>Contact</Link>
               
                
            </div>
      </nav>
    </div>
  )
}

export default Header