import React from 'react'
import './Technologies.css'
import figma_icon from './images/figma_icon.png'
import git_icon from './images/git_icon.png'
import github_icon from './images/github_icon.png'
import postgres_icon from './images/postgres_icon.png'
import rails_icon from './images/rails_icon.png'
import react_icon from './images/react_icon.png'
import ruby_icon from './images/ruby_icon.png'
import js_icon from './images/js_icon.png'

function Technologies() {
    return (
        <div class="tech__contents">
            <h1>Technologies</h1>
            <div className="tech__items">
                <img src={js_icon} alt="" />
                <img src={react_icon} alt="" />
                <img src={ruby_icon} alt="" />
                <img src={rails_icon} alt="" />
                <img src={figma_icon} alt="" />
                <img src={github_icon} alt="" />
                <img src={git_icon} alt="" />
                <img src={postgres_icon} alt="" />
            </div>
        </div>
    )
}

export default Technologies
