import React from 'react'
import './Banner.css'
import Nav from "./Nav"
import joecv from './images/joecv.pdf'

function Banner() {
    return (
        <div className="banner__contents hero">
        <Nav position="fixed"/>
            <div className="banner__items">
                <img src="https://res.cloudinary.com/ds6vgzap2/image/upload/v1629731688/profile_qpglev.jpg" alt="" />
                <h1>Hi, I'm Joe. I'm a fullstack developer</h1>
                <a href={joecv} without rel="noopener noreferrer" target="_blank" className="banner__btn">Download My CV</a>
            </div>
        <div className="waves"></div>
        </div>
        )
    }
    
    export default Banner
    