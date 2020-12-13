import React, { useState, useEffect } from 'react'
import './memoryComponents/memory.css'
import Board from './memoryComponents/board/Board'
import initializeDeck from './memoryComponents/deck'

function MemoryApp() {

    const [flipped, setFlipped] = useState([])
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(initializeDeck())
    }, [])

    const handleClick = (id) => {
        setFlipped([...flipped, id])
    }

    let cardBack = <div><i className="fas fa-question"></i></div>
    let cardFront = <div><i class="fas fa-heart"></i></div>

    return (
        <div className='memory-game-cont'>
            <h1>MEMORY</h1>
            <h2>Can you remember where the cards are?</h2>

            <Board 
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
            />

        </div>
    )
}

export default MemoryApp