import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Banner = () => {

    return (
        <div id='top' className='flex mt-[74px] bg-red-950 w-full h-[95vh] md:mt-[88px]'>
            <div className='absolute h-screen w-full flex flex-col text-center justify-center items-center z-[1]'>
                <motion.div
                    transition={{duration: 0.4, delay: 0}}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='text-[#eee] text-[3.3rem] md:text-[5rem] font-bold p-5 drop-shadow-RED'>KAITO's HISTORY !</motion.div>
                <motion.div
                    transition={{duration: 0.4, delay: 0.2}}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='text-[#eee] text-[1.7rem] md:text-4xl font-light drop-shadow-RED'>Self Introduction & Collection of Works</motion.div>
            </div>
            <div className='absolute pb-[88px] h-screen w-full flex justify-center items-center'>
                <Image
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