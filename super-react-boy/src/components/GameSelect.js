import React, { useState, useEffect, useHistory } from 'react'
import { Link } from 'react-router-dom'
import tictactoe from '../images/tictactoe.png'
import snake from '../images/snake.png'
import hangman from '../images/hangman.png'

function GameSelect() {

  return (
    <div className="gameSelectCont">
        <h1 className="selectTitle pretendo">Select a Game</h1>

        <div className='gamesCont'>
                <Link to='/rps-home' className='gameIcon'>
                    <h2 className='gameTitle'>Rock Paper Scissors</h2>
                    <div className='rpsIcons gameImg'>
                        <i className="rpsIcon far fa-hand-rock"></i>
                        <i className="rpsIcon far fa-hand-paper"></i>
                        <i className="rpsIcon far fa-hand-scissors flip-horz"></i>
                    </div>
                    <h2 className="playerNumber">(1 PLAYER)</h2>
                </Link>

                <Link to='/tic-tac-toe' className='gameIcon'>
                    <h2 className='gameTitle'>Tic Tac Toe</h2>
                    <div className='gameImgCont'>
                        <img className="tttImg" src={tictactoe} />
                    </div>
                    <h2 className="playerNumber">(2 PLAYERS)</h2>
                </Link>

                <Link to='/snake' className='gameIcon'>
                    <h2 className='gameTitle'>Snake</h2>
                    <div className='gameImgCont'>
                        <img className="snakeImg" src={snake} />
                    </div>
                    <h2 className="playerNumber">(1 PLAYER)</h2>
                </Link>

                <Link to='/hangman' className='gameIcon'>
                    <h2 className='gameTitle'>Hangman</h2>
                    <div className='gameImgCont'>
                        <img className="snakeImg" src={hangman} />
                    </div>
                    <h2 className="playerNumber">(1 PLAYER)</h2>
                </Link>
        </div>
    </div>
  )

}

export default GameSelect