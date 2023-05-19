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
        <div className='flex text-center'>
            <div className='flex flex-row flex-wrap w-[700px] lg:w-[1300] xl:w-[1700px] items-center justify-center mx-auto'>
                {projects.length > 0 ? (
                projects.map((project) => (
                <ProjectThumb key={project.id} project={project}/>
                ))
            ) : (
                <p>No projects found.</p>
            )}
            </div>
        </div>
    )
}

export default ProjectRow