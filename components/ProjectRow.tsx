import React from 'react'
import { useEffect, useState } from 'react'
import { Project } from '../typings'
import ProjectThumb from './ProjectThumb'

const ProjectRow = () => {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
    const fetchProjects = async () => {
        try {
            const res = await fetch('/projects.json')
            const data = await res.json()
            setProjects(data)
        } catch (error) {
            console.log('Error fetching projects:', error)
        }
    }
    fetchProjects()
    }, [])

    return (
        <div>
            {projects.length > 0 ? (
            projects.map((project) => (
            <ProjectThumb key={project.id} project={project}/>
            ))
        ) : (
            <p>No projects found.</p>
        )}
        </div>
    )
}

export default ProjectRow