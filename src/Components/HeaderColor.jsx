import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function HeaderColor() {
  return (
    <div className='headercolor'>
      <nav>
            <Link className='link' to='/'>English Course</Link>
            <div className='links'>
                <Link className='link' to='/about'>About</Link>
                <Link className='link'  to='/contact'>Contact</Link>
                <Link className='link'  to='/login'>Log In</Link>
                
            </div>
      </nav>
    </div>
  )
}

export default HeaderColor