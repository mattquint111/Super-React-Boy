import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {

    return (
        <div>
            <div><NavLink to='/'>Home</NavLink></div>
            <div><NavLink to='/add-movie'>Add Movie</NavLink></div>
        </div>
    )
}

export default Menu