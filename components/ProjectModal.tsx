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

    return (
        <div className=''>
            {/* modalbg */}
            <div className={`${!showModal ? 'BgHidden pointer-events-none' : 'Modalbg'}`} onClick={handleClose} />
            {/* modalwin */}
            <div className={`${!showModal ? 'WinHidden' : 'Modalwindow'}`}>
                <div onClick={handleClose} className='cursor-pointer p-5 absolute top-[-50px] right-[-70px] hidden pointer-events-none lg:block lg:pointer-events-auto'>
                    <div className='w-10 h-1 rounded-xl bg-[#e44] shadow-RED translate-y-1 rotate-45'/>
                    <div className='w-10 h-1 rounded-xl bg-[#e44] shadow-RED -rotate-45'/>
                </div>
                
                {/* modalContents */}
                <div className='text-[#eee] flex flex-col lg:flex-row p-7 md:p-9 lg:p-12 lg:space-x-7'>
                    <div className='relative w-full lg:w-1/2'>
                        <div>
                            <Image
                                src={`${project ? project?.src : '/mmpc-thumb.jpg'}`}
                                width={500}
                                height={500}
                                alt={`${project ? project?.name : 'ʕ◔ϖ◔ʔ'}`}
                                className='ModalPic'
                            />
                        </div>
                        <h2 className='text-center'>使用技術</h2>
                        <span className='Gridline'/>
                        <div className='ModalLangs'>
                            {!lang
                                ? (<p>なし</p>)
                                : (
                                lang.map((lang)=>(<div className='tracking-wider'>{lang.name}</div>))
                            )}
                        </div>
                    </div>
                    <div className='relative w-full lg:w-1/2'>
                        <h1 className='ModalTitle'>{project?.name}</h1>
                        <span className='Gridline'/>
                        <p className='ModalInfo'>{project?.info}</p>
                        <span className='Gridline'/>
                        <div className='ModalLinks'>
                            <a className='ModalLinkBtn'>Visit</a>
                            <a className='ModalLinkBtn'>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal