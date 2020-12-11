import React, { useState, useEffect, useHistory } from 'react'
import { Link } from 'react-router-dom'
import { secretKiwi } from './secretKiwi'

function SnakeHome() {

    const [playerName, setPlayerName] = useState('')
  
    const handleChange = (e) => {
      setPlayerName(e.target.value)
    }
  
  
    return (
      <div className="gameCont">
          <div className="gameHeader">
            <Link to='game-select'><i className="fas fa-angle-double-left goToSelect"></i></Link>
            <h1 className='pretendo rpsTitle snakeTitle'>SNAKE</h1>
            <div><i className="fas fa-bomb easterEgg hidden"></i></div>
          </div>
          
          <i onClick={secretKiwi} className="rpsHomeSecretKiwi fas fa-kiwi-bird"></i>
          <input onChange={handleChange} name='playerNameInput' className='playerNameInput' type='text' autocomplete="off" placeholder='Enter Player Name...'></input>
          <Link to={"/snake/" + playerName} className='startGame'>Start Game</Link>
         
      </div>
    )
  
  }
  
  export default SnakeHome