import { motion } from 'framer-motion'
import Image from 'next/image'

const Loading = () => {

    return (
        <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <div className='LoadingBG'>
                <Image
                src="/firsticon_x2.png"
                width={400}
                height={400}
                alt="my icon"
                className='MyIcon opacity-10 mt-[74px]  md:w-[500px] md:h-[500px]'/>
                <span className='RingOn' />
                <span className='RingOn2' />
            </div>
        </motion.div>
    )
}

export default Loading