import React, { useState } from 'react'
import './memoryComponents/memory.css'
import Card from './memoryComponents/Card'

function MemoryApp() {

    const [flipped, setFlipped] = useState([])

    const handleClick = (id) => {
        setFlipped([...flipped, id])
    }

    let cardBack = <div><i className="fas fa-question"></i></div>
    let cardFront = <div><i class="fas fa-heart"></i></div>

    return (
        <div className='memory-game-cont'>
            <h1>MEMORY</h1>
            <h2>Can you remember where the cards are?</h2>

            <Card
                id={1}
                width={100}
                height={100}
                back={cardBack}
                front={cardFront}
                flipped={flipped.includes(1)}
                handleClick={ () => handleClick(1) }
            />
        </div>
    )
}

export default MemoryApp