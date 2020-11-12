import React, { useState, useEffect, useHistory } from 'react'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <div className='homepageMainCont'>
      <h1 className="homepageTitle pretendo">Super-React-Boy <sub className="trademark">TM</sub></h1>
      <NavLink to='/game-select' className="startBtn btn">CLICK TO START</NavLink>
    </div>
  )

}

export default App