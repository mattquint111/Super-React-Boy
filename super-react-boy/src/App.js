import React, { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='mainCont'>
      <div className="gameConsole">

        <div className="headerCont">
          <div className="colorBarsLeft"></div>
          <p className='headerText'>DOT MATRIX WITH STEREO SOUND</p>
          <div className="colorBarsRight"></div>
        </div>

        <div className="outerScreen">

          <div className='batteryCont'>
            <div className='power'></div>
            <p className="powerText">BATTERY</p>
          </div>

          <div className="innerScreen">

          </div>

        </div>

        <div className="controlsCont">

          <div className='directionCont'>
            <h1 className="directionPad">+</h1>
          </div>

          <div className="buttonCont">
            <button className="gameButton-X"></button>
            <button className="gameButton-Y"></button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App