import { motion } from 'framer-motion'

const Loading = () => {

    return (
        <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <div className='LoadingBG'>
                <span className='RingOn' />
                <span className='RingOn2' />
            </div>
        </motion.div>
    )
}

export default Loading