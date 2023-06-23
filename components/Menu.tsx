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
        <div>
            <span className={`fixed right-0 top-0 w-full h-full bg-[#eee] pointer-events-none ease-in-out opacity-0 duration-200 ${isMenuClicked && 'opacity-50'}`}/>
            <div className={burger_class} onClick={openMenu}>
                    <div className='fixed right-0 top-0 flex-col p-[23px] space-y-2 cursor-pointer'>
                        <div className={`OpenMenuBtn ${isMenuClicked && 'bg-[#B91C1C] translate-y-3 rotate-[315deg]'}`}/>
                        <div className={`OpenMenuBtn ${isMenuClicked && 'w-0 ml-4 opacity-0'}`}/>
                        <div className={`OpenMenuBtn ${isMenuClicked && 'bg-[#B91C1C] -translate-y-3 rotate-[-315deg]'}`}/>
                    </div>
                <ul className={menu_class}>
                    <AnchorLink offset={74} href="#top"><li className='MenuCols'>Top</li></AnchorLink>
                    <AnchorLink offset={74} href="#prof"><li className='MenuCols'>About me</li></AnchorLink>
                    <AnchorLink offset={74} href="#projects"><li className='MenuCols'>Projects</li></AnchorLink>
                    <AnchorLink offset={74} href="#skills"><li className='MenuCols'>Skills</li></AnchorLink>
                    <AnchorLink offset={74} href="#contact"><li className='MenuCols'>Contact</li></AnchorLink>
                </ul>
            </div>
        </div>
    )
}

export default Menu