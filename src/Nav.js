import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll';
import logo from'./images/logo.png'

function Nav() {
    return (
        <div className="nav">
                <img className="logo" src={logo} alt="" />
            <ul className="nav__items">
                <Link to="projects" spy={true} smooth={true} duration={1000}>Projects</Link>
                <Link activeClass="nav__link" to="about" spy={true} smooth={true} duration={1000}>About</Link>
                <Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link> 
            </ul>
        </div>
    )
}

export default Nav
