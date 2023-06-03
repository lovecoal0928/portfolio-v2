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
        <motion.div
            transition={{delay: 0.4}}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 40,
            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
            viewport={{ once: true, amount: 0.8 }}
            className='ProjectThumb'
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
                className='md:w-[500px] rounded-lg border-2 border-[#eee]' 
            />
            <h1 className='font-light'>{project.name}</h1>
        </motion.div>
    )
}

export default Project