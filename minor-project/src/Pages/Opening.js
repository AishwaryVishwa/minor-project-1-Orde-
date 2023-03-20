import React from 'react'
import {NavLink} from 'react-router-dom'
import './Opening.css'
function Opening() {
  return (
    <>
    

    <div className="open-panel">

        <NavLink to='/scanner' >Customer</NavLink>

        <NavLink to='/Owner' >Owner</NavLink>
    </div>
        

    </>
  )
}

export default Opening