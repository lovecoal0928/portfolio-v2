import { modalState, projectState } from '@/atoms/modalAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Lang } from '@/typings'
import { motion } from "framer-motion"

const ProjectModal = () => {

    const [showModal , setShowModal] = useRecoilState(modalState)
    const [lang, setLang] = useState<Lang[]>([])
    const project = useRecoilValue(projectState)
    const innerWidth = (0)

    useEffect(() => {
        if (!project) return
        const fetchLang = () => {
            if (project.lang){
                setLang(project.lang)
            }
        }
        fetchLang()
    }, [project])
    
    
    const handleClose = () => {
        setShowModal(false)
    }
    const ModalItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1
        }
    }

    return (
        <div className=''>
            {/* modalbg */}
            <div className={`${!showModal ? 'BgHidden' : 'Modalbg'}`} onClick={handleClose} />
            {/* modalwin */}
            <div className={`${!showModal ? 'WinHidden' : 'Modalwindow'}`}>
                {innerWidth>(768) ?
                    <div onClick={handleClose} className='cursor-pointer p-5 absolute top-[-50px] right-[-70px]'>
                        <div className='w-10 h-1 rounded-xl bg-[#e44] shadow-RED translate-y-1 rotate-45'/>
                        <div className='w-10 h-1 rounded-xl bg-[#e44] shadow-RED -rotate-45'/>
                    </div>
                    : <></>
                }
                
                {/* modalContents */}
                <div className='text-[#eee] flex flex-col lg:flex-row p-7 md:p-9 lg:p-12 lg:space-x-7'>
                    <div className='relative w-full lg:w-1/2'>
                        <motion.div
                            transition={{delay: 0.2}}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}>
                            <Image
                                src={`${project ? project?.src : '/mmpc-thumb.jpg'}`}
                                width={500}
                                height={500}
                                alt={`${project ? project?.name : 'ʕ◔ϖ◔ʔ'}`}
                                className='ModalPic'
                            />
                        </motion.div>
                        <motion.h2
                                transition={{delay: 0.2}}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='text-center'>使用技術</motion.h2>
                        <span className='Gridline'/>
                        <div className='ModalLangs'>
                            {!lang
                                ? (<p>なし</p>)
                                : (
                                lang.map((lang)=>(<motion.div
                                    transition={{delay: 0.2}}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }} className='tracking-wider'>{lang.name}</motion.div>))
                            )}
                        </div>
                    </div>
                    <div className='relative w-full lg:w-1/2'>
                        <motion.h1
                                transition={{delay: 0.2}}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='ModalTitle'>{project?.name}</motion.h1>
                        <span className='Gridline'/>
                        <motion.p
                                transition={{delay: 0.2}}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='ModalInfo'>{project?.info}</motion.p>
                        <span className='Gridline'/>
                        <div className='ModalLinks'>
                            <motion.a
                                transition={{delay: 0.2}}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                href={project?.url} target='_blank'
                                className='ModalLinkBtn'>Visit</motion.a>
                            <motion.a
                                transition={{delay: 0.2}}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                href={project?.repo} target='_blank'
                                className='ModalLinkBtn'>GitHub Repository</motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal