import React from 'react'
import './ProjectItem.css'

function ProjectItem(props) {
    return (
        <div className="project__item">
             <div>
                <img src={props.image} alt="" />
                <p>{props.description}</p>
            </div>
            <div>
                <a href="#" className="project__link">Check it out</a>
                <a href="#" className="project__link">Github</a>
            </div>             
        </div>
    )
}

export default ProjectItem
