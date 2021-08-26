import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll';

function Nav() {
    return (
        <div className="nav">        
            <ul className="nav__items">
                <Link className="nav__link" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link>
                <Link className="nav__link" to="about" spy={true} smooth={true} duration={1000}>About</Link>
                <Link className="nav__link" to="tech" spy={true} smooth={true} duration={1000}>Technologies</Link> 
            </ul>
        </div>
    )
}

export default Nav
