import React from 'react'
import {NavLink} from 'react-router-dom'
import './Opening.css'
function Opening() {
  return (
    <>
    

    <div className="open-panel">
          <h2>Entering as Customer or Owner</h2>

      
        <NavLink className='open-btn' to='/scanner' >Customer</NavLink>
     

     
        <NavLink className='open-btn' to='/login' >Owner</NavLink>
    
    </div>
        

    </>
  )
}

export default Opening