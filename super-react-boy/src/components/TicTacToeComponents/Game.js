import React, { useState } from 'react'
import Board from './Board'

const Game = () => {

    // useState hook, create board array with 9 elements of null
    const [board, setBoard] = useState(Array(9).fill(null))

    const handleClick = () => {

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <div>
            <Board onClick={handleClick} />
        </div>
    )
}

export default Game