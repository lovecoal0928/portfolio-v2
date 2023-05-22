import  React , { useEffect, useState } from 'react'
import { Project } from "../typings"
import Image from 'next/image'
import { modalState, projectState } from '@/atoms/modalAtom'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'

interface Props {
    project: Project
}

const Project = ({project}: Props) => {

    const [showModal , setShowModal] = useRecoilState(modalState)
    const [currentProject, setCurrentProject] = useRecoilState(projectState)

    return (
        <div className='mb-3 md:m-5 space-y-3 cursor-pointer hover:drop-shadow-RED transition ease-in-out duration-100'
            onClick={() => {
                setCurrentProject(project)
                setShowModal(true)
            }}
        >
        <motion.div
            transition={{delay: 0.2}}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            >
            <Image
                src={project.src}
                width={400}
                height={400}
                alt=''
                className='md:w-[500px] rounded-lg border-2 border-slate-50 drop-shadow-Black'
            />
        </motion.div>
        <motion.h1
            transition={{delay: 0.2}}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='font-light drop-shadow-RED'>{project.name}</motion.h1>
        </div>
    )
}

export default Project