import React from 'react'
import { motion } from "framer-motion"

interface InputProps extends React.InputHTMLAttributes
<HTMLInputElement> {
    id: string
    label: string
    placeholder: string
    error?: boolean
    errorMessage?: string
}

const Input = ({
    id,
    label,
    placeholder,
    error = false,
    errorMessage = "",
    ...props
}: InputProps) => {
    return (
        <motion.div
            transition={{delay: 0.2}}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0,
            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col xl:w-1/2"
        >
            <label className='FormLabel' htmlFor={id}>
                {label}
            </label>
            <input {...props}
                type="text"
                id={id}
                placeholder={placeholder}
                className="FormBox"
            />
            {error && <p className='mt-2 text-sm text-red-500'>*{errorMessage}</p>}
        </motion.div>
    )
}

export default Input