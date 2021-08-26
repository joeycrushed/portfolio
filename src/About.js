import React from 'react'
import CopyMailTo from "react-copy-mailto";
import './About.css'

function About() {
    return (
        <div className="about__container about_bg" id="about">
            <div className="about__items">
                <div className="about__text">
                    <h1>About me</h1>
                    <p>I'm a graduate of full stack web development at Le Wagon, London Batch 599. Currently looking
                    for my first role in web development. At the moment, I'm learning the React library whilst working on wireframe for
                    a vintage brand and also a nutritional fitness company. Previous to getting into coding I worked in retail management
                    for 10 + years where I delivered the brand's aesthetic in-store through visual graphics and videos whilst managing service
                    and sales. </p>
                    <div className="about__align">
                        <ul className="about__contact">
                            <li><i class="far fa-envelope"></i><CopyMailTo email="josephandrewsmith87@gmail.com" defaultTooltip="Copy to clipboard"/> </li>
                            <li><i class="fab fa-github"></i><a className="footer__link" href="https://github.com/joeycrushed" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><i class="fab fa-linkedin"></i><a className="footer__link" href="https://www.linkedin.com/in/joesmith87/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="waves"></div>
            </div>
            
        </div>
    )
}

export default About
