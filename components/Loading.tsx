import { motion } from 'framer-motion'
import Image from 'next/image'

const Loading = () => {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2 }}
        transition={{ duration: 0.5 }}
        >
            <div className='LoadingBG'>
                <span className='absolute top-0 left-0 w-full h-screen -z-10 bg-[url("/background.svg")]'/>
                <Image
                src="/firsticon-x2.svg"
                width={400}
                height={400}
                alt="my icon"
                className='
                    MyIcon z-10 opacity-0 animate-appear
                    mt-[64px] md:mt-[88px] mr-[4px] md:w-[500px] md:h-[500px]'
                />
                <span className='RingOn' />
                <span className='RingOn2' />
            </div>
        </motion.div>
    )
}

export default Loading