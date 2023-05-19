import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Banner = () => {

    return (
        <div id='top' className='flex mt-[74px] bg-red-950 w-full h-screen md:mt-[88px]'>
            <div className='absolute h-screen w-full flex flex-col text-center justify-center items-center z-[1]'>
                <div className='text-[#eee] text-[3.3rem] md:text-[5rem] font-bold p-5 drop-shadow-RED'>KAITO's HISTORY !</div>
                <div className='text-[#eee] text-[1.7rem] md:text-4xl font-light drop-shadow-RED'>Self Introduction & Collection of Works</div>
            </div>
            <div className='absolute pb-[88px] h-screen w-full flex justify-center items-center'><Image
                src="/firsticon_x2.png"
                width={400}
                height={400}
                alt="my icon"
                className='MyIcon drop-shadow-RED md:w-[500px] md:h-[500px]'
            /></div>
        </div>
    )
}

export default Banner