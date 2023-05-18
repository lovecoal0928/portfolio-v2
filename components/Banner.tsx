import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Banner = () => {

    return (
        <div id='top' className='mt-[74px] bg-slate-700 h-screen md:mt-[88px]'>
            <h1>COA's HISTORY!</h1>
            <p>Self Introduction & Collection of Works</p>
            <Image
                src="/firsticon_x2.png"
                width={200}
                height={200}
                alt="my icon"
                className='MyIcon Shadow1'
            />
        </div>
    )
}

export default Banner