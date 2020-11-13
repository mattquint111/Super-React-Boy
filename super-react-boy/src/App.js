import React, { useState, useEffect, useHistory } from 'react'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='homepageMainCont'>
      <h1 className="homepageTitle pretendo">Super-React-Boy <sub className="trademark">TM</sub></h1>
      <Link to='/game-select' className="startBtn btn">CLICK TO START</Link>
    </div>
  )

}

export default App