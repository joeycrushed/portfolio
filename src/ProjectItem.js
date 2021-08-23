import React from 'react'
import './ProjectItem.css'

function ProjectItem(props) {
    return (
        <div>
             <div className="project__item">
                <h1>{props.title}</h1>
                <img src={props.image} alt="" />
                <p>{props.description}</p>
                <a href="#" className="project__link">Check it out</a>
                <a href="#" className="project__link">Github</a>
            </div>      
        </div>
    )
}

export default ProjectItem
