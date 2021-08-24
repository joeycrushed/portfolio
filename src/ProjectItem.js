import React from 'react'
import './ProjectItem.css'




function ProjectItem(props) {
    return (
        <a className="project__content" href={props.url} target="_blank" rel='noreferrer' >
        <div class="project__item">
            <img src={props.image} alt=""/>
            <div>
                <div className="project__description">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
        </a>
          
    )
}

export default ProjectItem
