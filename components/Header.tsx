import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
        <header className={`${!isScrolled?'bg-[#eee] text-[#333]':'bg-[#eee]/70'}`}>
            <div className='flex items-center space-x-3 md:space-x-10'>
                <h1>Kaito's Portfolio</h1>
                    <ul className='hidden space-x-4 md:flex'>
                        <li><AnchorLink offset={100} href="#top">Top</AnchorLink></li>
                        <li><AnchorLink href="#prof">About me</AnchorLink></li>
                        <li><AnchorLink href="#projects">Projects</AnchorLink></li>
                        <li><AnchorLink href="#skills">Skills</AnchorLink></li>
                        <li><AnchorLink href="#contact">Contact</AnchorLink></li>
                    </ul>
            </div>
        </header>
    )
}

export default Header