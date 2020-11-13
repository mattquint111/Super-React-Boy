import React, { useState, useEffect, useHistory } from 'react'
import { NavLink } from 'react-router-dom'

function GameSelect() {

  return (
    <div className="gameSelectCont">
        <h1 className="selectTitle pretendo">Select a Game</h1>

        <div className='gamesCont'>


                <NavLink to='/rps-home' className='gameIcon'>
                    <h2 className='gameTitle'>Rock Paper Scissors</h2>
                    <div className='rpsIcons'>
                        <i class="rpsIcon far fa-hand-rock"></i>
                        <i class="rpsIcon far fa-hand-paper"></i>
                        <i class="rpsIcon far fa-hand-scissors rotate90"></i>
                    </div>
                    
                </NavLink>
        </div>
    </div>
  )

}

export default GameSelect