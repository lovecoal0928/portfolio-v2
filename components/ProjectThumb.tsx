import  React , { useEffect, useState } from 'react'
import { Project } from "../typings"
import Image from 'next/image'
import { modalState, projectState } from '@/atoms/modalAtom'
import { useRecoilState } from 'recoil'

interface Props {
    project: Project
}

const Project = ({project}: Props) => {

    const [showModal , setShowModal] = useRecoilState(modalState)
    const [currentProject, setCurrentProject] = useRecoilState(projectState)

    return (
        <div className='pm-5 md:m-5 space-y-3 cursor-pointer hover:drop-shadow-RED transition ease-in-out duration-100'
            onClick={() => {
                setCurrentProject(project)
                setShowModal(true)
            }}
        >
            <Image
                src={project.src}
                width={400}
                height={400}
                alt=''
                className='md:w-[500px] rounded-lg border-2 border-slate-50 drop-shadow-Black'
            />
            <h1 className='font-light drop-shadow-RED'>{project.name}</h1>
        </div>
    )
}

export default Project