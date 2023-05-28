import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { validate } from "@/utils/validate"
import axios from "axios"
import Input from "./forms/Input"
import TextArea from "./forms/TextArea"
import { RiLoader5Fill } from "react-icons/ri"

// 受信したメッセージの型定義
interface IValues {
    name: string
    email: string
    message: string
}
interface IErrors extends Partial<IValues> {}

const Contact = () => {
    // フォームの入力内容の格納先
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState<IErrors>({})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [messageState, setMessageState] = useState('')

    // フォームの入力内容のPOST
    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = validate(value)
        if (errors && Object.keys(errors).length > 0){
            return setErrors(errors)
        }
        setErrors({})
        setLoading(true)
        // フォームの入力内容をメールの成形してるとこに投げる
        axios.post("/api/contact", {
            name: value.name,
            email: value.email,
            message: value.message,
        })
        .then((res) => {
            // POST成功
            if (res.status === 200){
                setValue({ name: "", email: "", message: "",})
                setLoading(false)
                setSuccess(true)
                setMessageState(res.data.message)
            } else {
                setLoading(false)
                setMessageState(res.data.message)
            }
        })
        // res.statusが500だったらエラーメッセージ
        .catch((err) => {
            setLoading(false)
            setMessageState(String(err.message))
        })
        setLoading(false)
    }
    // 入力内容が更新されるたびにsetValueに入力内容を格納する
    const handleChange = (e: | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
        }))
        
        console.log(value)
    }

    return (
        <div id='contact' className='bg-red-950 w-full text-[#eee]'>
            <div className='py-6 md:p-10'>
                <h1 className='flex text-4xl m-6 text-center drop-shadow-RED justify-center'>- CONTACT -</h1>
                <p className='flex font-light mx-auto text-2xl px-5 md:px-0 text-center drop-shadow-RED justify-center w-[460px] md:w-[500px] xl:w-[900px]'>
                    最後までご覧いただきありがとうございました。<br/>
                    もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。</p>
                <div className="m-5 mx-auto w-[380px] md:w-[600px] xl:w-[900px]">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col xl:flex-row xl:w-full xl:space-x-10 mb-3">
                            <Input
                                value={value.name}
                                onChange={handleChange}
                                id="name"
                                name="name"
                                label="お名前"
                                placeholder="Name"
                                error={!!errors.name}
                                errorMessage={!!errors.name ? errors.name : ""}
                            />
                            <Input
                                value={value.email}
                                onChange={handleChange}
                                id="email"
                                name="email"
                                label="メールアドレス"
                                placeholder="your-email@example.com"
                                error={!!errors.email}
                                errorMessage={!!errors.email ? errors.email : ""}
                            />
                        </div>
                        <TextArea
                            value={value.message}
                            onChange={handleChange}
                            id="message"
                            name="message"
                            label="メッセージ"
                            placeholder="Your message here..."
                            error={!!errors.message}
                            errorMessage={!!errors.message ? errors.message : ""}
                        />
                        <motion.div
                            transition={{delay: 0.2}}
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0,
                            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <button type="submit" className="SubmitBtn" disabled={loading}>
                                {loading !== true ? (
                                    "送　　信"
                                ): (
                                    <RiLoader5Fill className="h-8 w-8 animate-spin" />
                                )}
                            </button>
                                {success !== false ? (
                                    <p className="font-light text-lg text-emerald-400">
                                        {messageState}
                                    </p>
                                ) : (
                                    <p className="font-light text-lg text-red-500">
                                        {messageState}
                                    </p>
                                )}
                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact