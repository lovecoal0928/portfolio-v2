import { modalState, projectState } from '@/atoms/modalAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Lang } from '@/typings'

const ProjectModal = () => {

    const [showModal , setShowModal] = useRecoilState(modalState)
    const [lang, setLang] = useState<Lang[]>([])
    const project = useRecoilValue(projectState)

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
            <div className={`${!showModal ? 'BgHidden' : 'Modalbg'}`} onClick={handleClose} />
            {/* modalwin */}
            <div className={`${!showModal ? 'WinHidden' : 'Modalwindow'}`}>
                <div onClick={handleClose} className='cursor-pointer p-5 absolute top-[-50px] right-[-70px]'>
                    <div className='w-10 h-1 rounded-xl bg-[#e44] shadow-RED translate-y-1 rotate-45'/>
                    <div className='w-10 h-1 rounded-xl bg-[#e44] shadow-RED -rotate-45'/>
                </div>
                {/* modalContents */}
                <div className='text-[#eee] flex'>
                    <div>
                        <Image
                            src={`${project?.src}`}
                            width={500}
                            height={500}
                            alt={`${project?.name}`}
                            className='ModalPic'
                        />
                        <h2>ー　使用技術　ー</h2>
                        <div>
                            {!lang
                                ? (<p>なし</p>)
                                : (
                                lang.map((lang)=>(<div>{lang.name}</div>))
                            )}
                        </div>
                    </div>
                    <div>
                        <h1 className='ModalTitle'>{project?.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal