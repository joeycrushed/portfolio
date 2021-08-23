import React from 'react'
import './ProjectItem.css'

function ProjectItem() {
    return (
        <div>
             <div className="project__item">
                <h1>Project 1</h1>
                <img src="https://res.cloudinary.com/ds6vgzap2/image/upload/v1629732564/project_vjteem.png" alt="" />
                <p>Description</p>
                <a href="#" className="project__link">Check it out</a>
                <a href="#" className="project__link">Github</a>
            </div>      
        </div>
    )
}

export default ProjectItem
