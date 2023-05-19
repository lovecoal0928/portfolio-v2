import React from 'react'
import { Project } from "../typings"

interface Props {
    project: Project
}

const Project = ({project}: Props) => {
    return (
        <div className='bg-white '>
            <h2>{project.name}</h2>
            <a href={project.url}>Visit Project</a>
        </div>
    )
}

export default Project