import Image from 'next/image'
import React from 'react'
import {FaGithub , FaTwitter , FaYoutube} from "react-icons/fa"
import {SiNiconico} from "react-icons/si"
import {MdEditNote} from "react-icons/md"

const Profile = () => {
    return (
        <div id='prof' className='bg-slate-200 w-full'>
            <div className='p-10'>
                <h1 className='flex text-4xl m-6 text-center justify-center'>- ABOUT ME -</h1>
                <div className='my-12 flex justify-center space-x-7'>
                    <Image
                        src="/prof.jpg"
                        width={300}
                        height={300}
                        alt="my photo"
                        className=' rounded-lg border-2 border-[#bbb] drop-shadow-Gray min-w-[300px] max-h-[300px]'
                    />
                    <div className='flex flex-col w-[400px] bg-slate-200 space-y-3'>
                        <div className='flex flex-col w-[170px] text-center space-y-1'>
                            <p className='text-[1.1rem]'>MIZUTANI KAITO</p>
                            <h2 className='text-[2.4rem] font-bold'>水谷 海斗</h2>
                        </div>
                        <p>
                            アメリカ生まれだけど純血日本人な名古屋育ちのエンジニア。<br/>
                            中学校の頃初めてのPCを家に迎え、CG映像制作、動画制作、ライブ配信活動を経験。<br/>
                            専門学校に入学してからプログラミングの勉強を始めました。
                        </p>
                        <div className='flex flex-row flex-wrap'>
                            <a href='https://github.com/lovecoal0928' target='_blank'>
                                <div className='SocialBtn1'><FaGithub className='Icon-md'/>GitHub</div>
                            </a>
                            <a href='https://twitter.com/lovecoal0928' target='_blank'>
                                <div className='SocialBtn1'><FaTwitter className='Icon-md'/>Twitter</div>
                            </a>
                            <a href='https://qiita.com/Coa3' target='_blank'>
                                <div className='SocialBtn1'><MdEditNote className='Icon-md'/>Qiita</div>
                            </a>
                            <a href='https://www.nicovideo.jp/user/71360133' target='_blank'>
                                <div className='SocialBtn1'><SiNiconico className='Icon-md'/>niconico</div>
                            </a>
                            <a href='https://www.youtube.com/channel/UC_4haZxancs76oe4QGvR3JA' target='_blank'>
                                <div className='SocialBtn1'><FaYoutube className='Icon-md'/>Youtube</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile