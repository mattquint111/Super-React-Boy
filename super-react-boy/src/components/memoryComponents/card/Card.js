import React from 'react'
import './card.css'
import PropTypes from 'prop-types'

function Card({ handleClick, id, flipped, back, front, height, width }) {

    return (
        <div 
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width, height
            }}
            onClick={() => handleClick(id)}
        >
            <div className='flipper'>
                <div
                    style={{
                        height, width
                    }}
                    className={flipped ? 'front' : 'back'}
                >
                    {flipped ? front : back}
                </div>
            </div>

        </div>
    )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}

export default Card