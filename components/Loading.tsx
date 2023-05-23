import { motion } from 'framer-motion'
import Image from 'next/image'

const Loading = () => {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        >
            <div className='LoadingBG'>
                <Image
                src="/firsticon_x2.png"
                width={400}
                height={400}
                alt="my icon"
                className='MyIcon opacity-10 mt-[64px] md:mt-[88px] mr-[4px] md:w-[500px] md:h-[500px]'/>
                <span className='RingOn' />
                <span className='RingOn2' />
            </div>
        </motion.div>
    )
}

export default Loading