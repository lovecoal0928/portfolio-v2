import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from 'next/image'
import Menu from './Menu'
import { motion } from 'framer-motion'

const Header=()=>{
    const[isScrolled,setIsScrolled]=useState(false)

    useEffect(() => {
        const handleScroll=()=>{
            if(window.scrollY>100){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
    })
    return (
        <motion.div
            initial={{ opacity: 0.5}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5 }}
        >
            <header className={`${!isScrolled?'bg-[#eee]':'bg-[#eee]/80'}`}>
                <div className='flex items-center md:space-x-36 lg:space-x-[370px] xl:space-x-[550px]'>
                    <Image
                        src="/firsticon.svg"
                        width={50}
                        height={50}
                        alt="my icon"
                        className='MyIcon z-30'
                    />
                    {/* トップナビゲーション */}
                    <ul className='hidden md:flex'>
                        <AnchorLink offset={88} href="#top"><li className='HeaderLink'>Top</li></AnchorLink>
                        <AnchorLink offset={88} href="#prof"><li className='HeaderLink'>About me</li></AnchorLink>
                        <AnchorLink offset={88} href="#projects"><li className='HeaderLink'>Projects</li></AnchorLink>
                        <AnchorLink offset={88} href="#skills"><li className='HeaderLink'>Skills</li></AnchorLink>
                        <AnchorLink offset={88} href="#contact"><li className='HeaderLink'>Contact</li></AnchorLink>
                    </ul>

                    <div className='md:hidden'>
                        <Menu />
                    </div>
                    
                </div>
            </header>
        </motion.div>
    )
}

export default Header