import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";



function HeaderColor() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='headercolor'>
      <nav> 
       
            <Link className='linkc' to='/'>English Course</Link>
            <button className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
              <GiHamburgerMenu />
            </button>
           
            <div className={`linksc ${menuOpen ? "open" : ""}`}>
                <Link className='linkc' to='/about'>About</Link>
                <Link className='linkc'  to='/contact'>Contact</Link>
                
                
            </div>
      </nav>
    </div>
  )
}

export default HeaderColor