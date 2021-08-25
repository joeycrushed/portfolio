import React from 'react'
import CopyMailTo from "react-copy-mailto";

import './Footer.css'

function Footer() {
    return (
        <div className="footer__content" id="contact">
            <h1>Contact</h1>
            <div className="footer__items ">
                <CopyMailTo email="josephandrewsmith87@gmail.com" defaultTooltip="copy"/> 
                <a className="footer__link" href="https://github.com/joeycrushed" target="_blank" rel="noreferrer">GitHub</a>
                <a className="footer__link" href="https://www.linkedin.com/in/joesmith87/" target="_blank" rel="noreferrer">LinkedIn</a>

            </div>
        </div>
    )
}

export default Footer
