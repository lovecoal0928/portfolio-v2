import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from 'next/image'
import Menu from './Menu'

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
        <header className={`${!isScrolled?'bg-[#eee] text-[#333]':'bg-[#eee]/80'}`}>
            <div className='flex items-center space-x-4 md:space-x-6'>
                <Image
                    src="/firsticon.png"
                    width={50}
                    height={50}
                    alt="my icon"
                    className='MyIcon'
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
    )
}

export default Header