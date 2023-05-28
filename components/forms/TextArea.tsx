import React from 'react'
import { motion } from "framer-motion"

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    id: string
    name: string
    label: string
    placeholder: string
    type?: string
    error?: boolean
    errorMessage?: string
}

const TextArea = ({
    id,name,label,placeholder,type,error,errorMessage,...props
}: TextAreaProps) => {
    return (
        <motion.div
            transition={{delay: 0.2}}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0,
            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col mb-3"
        >
            <label htmlFor={id} className="FormLabel">
                {label}
            </label>
            <textarea
                {...props} name={name} id={id} rows={5} placeholder={placeholder}
                className='TextAREA'
            ></textarea>
        {error &&
            <p className='mt-2 text-sm text-red-500' >
            *{errorMessage}
            </p>
        }
        </motion.div>
    )
}

export default TextArea