import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <h1>My Portfolio</h1>
            <ul className="nav__items">
                <a href="" className="nav__link">About</a>
                <a href="#" className="nav__link">Projects</a>
                <a href="" className="nav__link">Contact</a> 
            </ul>
        </div>
    )
}

export default Nav
