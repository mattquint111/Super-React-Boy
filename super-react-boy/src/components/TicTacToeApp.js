import React from 'react'
import { Link } from 'react-router-dom'
import Board from './TicTacToeComponents/Board'
import Game from './TicTacToeComponents/Game'
import Square from './TicTacToeComponents/Square'

const TicTacToeApp = () => {
    return (
        <div className="tictactoeCont">

            <div className="gameHeader tttHeader">
                <Link to='game-select'><i className="fas fa-angle-double-left goToSelect"></i></Link>
                <h1 className='pretendo tttTitle'>TIC TAC TOE</h1>
                <i className="fas fa-angle-double-left goToSelect hidden mobileHidden"></i>
            </div>

            <Game />
        </div>
    )
}

export default TicTacToeApp