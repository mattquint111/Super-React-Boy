import React from 'react'
import './board.css'
import PropTypes from 'prop-types'
import Card from '../card/Card'

function shuffle(array) {
    const _array = array.slice(0)

    for (let i = 0; i < array.length - 1; i++) {
        
    }
}

function Board({ cards, flipped, handleClick }) {
    return(
        <div className="board">
            {cards.map( card => {
                <Card
                key={card.id}
                id={card.id}
                type={card.type}
                width={card.width}
                height={card.height}
                flipped={flipped.includes(card,id)}
                handleClick={ () => handleClick(card.id) }
            />
            })}
        </div>
    )
}

Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Board