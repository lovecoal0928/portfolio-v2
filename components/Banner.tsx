import Image from 'next/image'
import { easeInOut, motion, spring } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Banner = () => {

    return (
        <div id='top' className='flex mt-[74px] bg-red-950 w-full h-[95vh] md:mt-[88px]'>
            <motion.div
                    transition={{ease:'easeInOut', duration: 0.5, delay: 0.3 }}
                    initial={{ opacity: 0, y: -20, scale: 0.6 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    className='absolute h-screen w-full flex flex-col text-center justify-center items-center z-[1]'>
                <div className='text-[#eee] text-[3.5rem] md:text-[5rem] font-bold p-6 pb-0 drop-shadow-RED lg:tracking-widest'>
                        KAITO's HISTORY
                </div>
                <div className='text-[#eee] text-[1.7rem] md:text-4xl font-light drop-shadow-RED lg:tracking-widest'>
                        Self Introduction & Collection of Works
                </div>
            </motion.div>
            <div className='absolute pb-[88px] h-screen w-full flex justify-center items-center'>
                <Image
                src="/firsticon-x2.svg"
                width={400}
                height={400}
                alt="my icon"
                className='MyIcon drop-shadow-RED md:w-[500px] md:h-[500px]'
                />
            </div>
        </div>
    )
}

export default Banner