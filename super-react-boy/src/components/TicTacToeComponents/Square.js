import React from 'react'


const Square = ({value, onClick }) => {

    return (
        <button className="squareCont" onClick={onClick}>{value}</button>
    )
}

export default Square