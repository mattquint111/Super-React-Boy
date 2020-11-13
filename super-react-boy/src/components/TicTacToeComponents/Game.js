import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from './helper'
import { secretKiwi } from '../secretKiwi'


const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]

        if (winner || squares[i]) return;

        squares[i] = (xIsNext ? 'X' : 'O')
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () => {
        return(
            history.map((_step, move) => {
                const destination = move ? `Go to move #${move}` : 'Start new game'
                return (
                    <li className="listItemCont" key={move}>
                        <button className="moveToBtn" onClick={() => jumpTo(move)}>
                            {destination}
                        </button>
                    </li>
                )
            })
            
        )
    }

    return (
        <div className="tttGameCont">
            
            <div>
                <p className="winnerCont">{winner ? "WINNER: " + winner : "Next Player: " + (xIsNext ? 'X' : 'O')}</p>
                <i onClick={secretKiwi} class="fas fa-kiwi-bird tttSecretKiwi"></i>
            </div>
            

            <Board className='boardCont' squares={history[stepNumber]} onClick={handleClick} />
            

            <div className="movesCont">
                {renderMoves()}
            </div>

        </div>
    )
}

export default Game