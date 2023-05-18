import Image from 'next/image'
import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = () => {

    // メニューボタンが押されたか
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [burger_class, setBurgerClass] = useState("BurgerUnClicked")
    const [menu_class, setMenuClass] = useState("MenuHidden")

    const openMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("BurgerClicked")
            setMenuClass("MenuVisible")
            setIsMenuClicked(true)
        }else {
            setBurgerClass("BurgerUnClicked")
            setMenuClass("MenuHidden")
            setIsMenuClicked(false)
        }
    }

    return (
        <div className={burger_class} onClick={openMenu}>
            {isMenuClicked
                ?<div className='fixed right-56 top-0 flex-col p-[23px] space-y-2 ease-in-out duration-300'>
                    <div className='w-9 h-1 rounded-xl bg-[#eee] translate-y-3 rotate-45'/>
                    <div className='opacity-0'/>
                    <div className='w-9 h-1 rounded-xl bg-[#eee] -rotate-45'/>
                </div>
                :<div className='fixed right-0 top-0 flex-col p-[23px] space-y-2 ease-in-out duration-300'>
                    <div className='w-9 h-1 rounded-xl bg-[#333]'/>
                    <div className='w-9 h-1 rounded-xl bg-[#333]'/>
                    <div className='w-9 h-1 rounded-xl bg-[#333]'/>
                </div>
            }
            <ul className={menu_class}>
                <AnchorLink offset={74} href="#top"><li className='MenuCols'>Top</li></AnchorLink>
                <AnchorLink offset={74} href="#prof"><li className='MenuCols'>About me</li></AnchorLink>
                <AnchorLink offset={74} href="#projects"><li className='MenuCols'>Projects</li></AnchorLink>
                <AnchorLink offset={74} href="#skills"><li className='MenuCols'>Skills</li></AnchorLink>
                <AnchorLink offset={74} href="#contact"><li className='MenuCols'>Contact</li></AnchorLink>
            </ul>
        </div>
    )
}

export default Menu