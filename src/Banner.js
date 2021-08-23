import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner__contents hero">
            <div className="banner__items">
                <img src="https://res.cloudinary.com/ds6vgzap2/image/upload/v1629731688/profile_qpglev.jpg" alt="" />
                <h1>Hi my name is Joe, I'm a fullstack developer</h1>
                <a href="www.google.co.uk" className="banner__btn">Find out more</a>
            </div>
            <div className="waves"></div>
        </div>
    )
}

export default Banner
