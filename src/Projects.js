import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
    return (
        <div className="project__container" id="projects">
        <h1>Projects</h1>
        <div className="project__card">
            <ProjectItem title="PawPals" image="https://res.cloudinary.com/ds6vgzap2/image/upload/v1629732564/project_vjteem.png"
                description="PawPals is a web application designed to help dog owners socialise their dogs in a safe way"
            />
             <ProjectItem title="BlogR" image="https://res.cloudinary.com/ds6vgzap2/image/upload/v1629734624/Screenshot_2021-08-23_at_17.03.36_dsesld.png"
                description="BlogR is a responsive react landing page"
            />
             <ProjectItem title="Plants App" image="https://res.cloudinary.com/ds6vgzap2/image/upload/v1629734335/Screenshot_2021-06-24_at_12.55.22_zk6qfl.png"
                description="Plants App is a platform where users can rent out their plants for events"
            />
        </div>
        </div>
    )
}

export default Projects
