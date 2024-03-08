import Image from 'next/image'
import React from 'react'
import {FaGithub , FaTwitter , FaYoutube} from "react-icons/fa"
import {SiNiconico} from "react-icons/si"
import {MdEditNote} from "react-icons/md"
import { motion } from 'framer-motion'

const Profile = () => {
    return (
        <div id='prof' className='bg-slate-200 w-full pb-12'>
            <div className='p-10'>
                <motion.h1 className='flex text-4xl m-6 text-center justify-center'>- ABOUT ME -</motion.h1>
                <div className='md:my-12 flex flex-col items-center text-center md:flex-row md:text-left justify-center md:space-x-7'>
                    <motion.div
                            transition={{delay: 0.4}}
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 40,
                            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='z-10'>
                        <Image
                            src="/prof.svg"
                            width={300}
                            height={300}
                            alt="my photo"
                            className='my-auto rounded-2xl border-2 border-[#bbb] drop-shadow-Gray lg:w-[450px] lg:h-[450px] md:w-[380px] md:h-[380px]'
                        />
                    </motion.div>
                    <div className='flex flex-col w-[390px] md:w-[280px] lg:w-[400px] md:justify-center bg-slate-200 space-y-3'>
                        <motion.div
                            transition={{delay: 0.4}}
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 40,
                            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='flex z-10 flex-col w-full md:w-[250px] md:pb-6 text-center md:space-y-3'>
                            <p className='text-[1.2rem] md:text-[1.7rem]'>MIZUTANI　KAITO</p>
                            <h2 className='text-[2.4rem] md:text-[3.6rem] font-bold'>水谷 海斗</h2>
                        </motion.div>
                        <motion.div
                            transition={{delay: 0.4}}
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 40,
                            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='lg:text-lg z-10'>
                            アメリカ生まれの日本人、名古屋育ちのエンジニア。<br/>
                            中学校の頃初めてのPCを家に迎え、CG映像制作、動画制作、ライブ配信活動を経験。<br/>
                            専門学校に入学してからプログラミングの勉強を始めました。
                        </motion.div>
                        <div className='flex justify-center md:justify-start flex-row flex-wrap'>
                            <a href='https://github.com/lovecoal0928' target='_blank'>
                                <motion.div
                                    transition={{delay: 0.4}}
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 40,
                                    transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className='SocialBtn1 z-10'><FaGithub className='Icon-md'/>GitHub</motion.div>
                            </a>
                            <a href='https://twitter.com/lovecoal0928' target='_blank'>
                                <motion.div
                                    transition={{delay: 0.4}}
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 40,
                                    transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className='SocialBtn1 z-10'><FaTwitter className='Icon-md'/>Twitter</motion.div>
                            </a>
                            <a href='https://qiita.com/Coa3' target='_blank'>
                                <motion.div
                                    transition={{delay: 0.4}}
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 40,
                                    transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className='SocialBtn1 z-10'><MdEditNote className='Icon-md'/>Qiita</motion.div>
                            </a>
                            <a href='https://nicovideo.jp/user/71360133/video?ref=pc_userpage_menu' target='_blank'>
                                <motion.div
                                    transition={{delay: 0.4}}
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 40,
                                    transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className='SocialBtn1 z-10'><SiNiconico className='Icon-md'/>niconico</motion.div>
                            </a>
                            <a href='https://www.youtube.com/channel/UC_4haZxancs76oe4QGvR3JA' target='_blank'>
                                <motion.div
                                    transition={{delay: 0.4}}
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 40,
                                    transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className='SocialBtn1 z-10'><FaYoutube className='Icon-md'/>Youtube</motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile