import React from 'react'
import Square from './Square'
import { calculateWinner } from './helper'

const Board = ({ squares, onClick }) => {
    return (
        <div className='boardCont'>

            {squares.map( (square, i) => {
                return <Square key={i} value={square} onClick={() => onClick(i)}/>
            })}

        </div>
    )
}

export default Board