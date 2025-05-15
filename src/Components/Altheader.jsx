import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Altheader() {
  return (
    <div className='altheader'>
        <nav>
                    
                    <div className='links'>
                        <Link className='link' to='/lessons'>Lessons</Link>
                        <Link className='link'  to='/vocab'>Vocabulary</Link>
                        <Link className='link'  to='/Videos'>Videos</Link>
                        <Link className='link'  to='/Quiz'>Quiz</Link>
                        
                    </div>
              </nav>
            </div>

    
  )
}

export default Altheader