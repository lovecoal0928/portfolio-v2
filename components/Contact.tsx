import React, { use, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { set, useForm } from "react-hook-form"

// 受信したメッセージの型定義
interface IValues {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IValues>({ mode: "onChange" })

    const [showToast, setShowToast] = useState(false)
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [showToast])

    const [ContactFlg, setContactFlg] = useState(false)
    const [toast, setToast] = useState('')

    const handleToast = () => {
        setShowToast(true)
    }

    const onSubmit = handleSubmit(async(data: IValues) => {
        if(isValid) {
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value)
            })
            try {
                const response = await fetch(
                    process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT ?? '',
                    {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Accept: 'application/json',
                        },
                    },
                )
                if (response.ok) {
                    handleToast()
                    setContactFlg(true)
                    setToast('送信完了しました！メールをご確認ください。')
                } else {
                    setContactFlg(false)
                    setToast('送信に失敗しました。')
                }
            } catch (err) {
                console.error(err)
                setContactFlg(false)
                setToast('送信に失敗しました。')
            }
        }
    })

    return (
        <div id='contact' className='bg-transparent w-full text-[#eee]'>
            <div className='py-6 md:p-10'>
                <h1 className='flex text-4xl m-6 text-center drop-shadow-White justify-center'>- CONTACT -</h1>
                <p className='flex font-light mx-auto text-2xl px-5 md:px-0 text-center drop-shadow-White justify-center w-[460px] md:w-[500px] xl:w-[900px]'>
                    最後までご覧いただきありがとうございました。<br/>
                    もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。</p>
                <div className="m-5 mx-auto w-[380px] md:w-[600px] xl:w-[900px]">
                    <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="post" onSubmit={onSubmit}>
                        <div className="flex flex-col xl:flex-row xl:w-full xl:space-x-10 mb-3">
                            <motion.div
                                transition={{delay: 0.2}}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0,
                                transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="flex flex-col xl:w-1/2"
                            >
                                <label className='FormLabel' htmlFor='name'>
                                    お名前
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    {...register(`name`, {
                                        required: `※名前を入力してください`,
                                        minLength: {
                                            value: 2,
                                            message: `※名前は2文字以上で入力してください`
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: `※名前は20文字以内で入力してください`
                                        }
                                    })}
                                    placeholder='Name'
                                    className="FormBox"
                                    area-describedby="error-name-required"
                                />
                                {errors?.name && (
                                    <span id="error-name-required" aria-live="assertive">
                                        {errors.name.message}
                                    </span>
                                )}
                            </motion.div>
                            <motion.div
                                transition={{delay: 0.2}}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0,
                                transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="flex flex-col xl:w-1/2"
                            >
                                <label className='FormLabel' htmlFor='email'>
                                    メールアドレス
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    {...register(`email`, {
                                        required: `※メールアドレスを入力してください`,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: `※有効なメールアドレスを入力してください`,
                                        },
                                    })}
                                    placeholder='your-email@example.com'
                                    className="FormBox"
                                    area-describedby="error-email-required"
                                />
                                {errors?.email && (
                                    <span id="error-email-required" aria-live="assertive">
                                        {errors.email.message}
                                    </span>
                                )}
                            </motion.div>
                        </div>
                        <motion.div
                            transition={{delay: 0.2}}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0,
                            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex flex-col mb-3"
                        >
                            <label htmlFor='message' className="FormLabel">
                                メッセージ
                            </label>
                            <textarea
                                id='message'
                                {...register(`message`, { required: `※メッセージを入力してください` })}
                                rows={5}
                                placeholder='ご自由に入力ください'
                                className='TextAREA'
                                area-describedby="error-message-required"
                            ></textarea>
                            {errors?.message && (
                                <span id="error-message-required" aria-live="assertive">
                                    {errors.message.message}
                                </span>
                            )}
                        </motion.div>
                        <motion.div
                            transition={{delay: 0.2}}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0,
                            transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <button type="submit" className="SubmitBtn">
                                    送 信
                            </button>
                            
                            {!ContactFlg == false ? (
                                showToast==true && (
                                    <motion.div
                                        transition={{delay: 0.2}}
                                        initial={{ opacity: 0, top: -100 }}
                                        animate={{ opacity: 1, top: 128, transition: { duration: 0.8 , type: 'spring', bounce: 0.4 }}}
                                        exit={{ opacity: 0, top: 128 }}
                                        className="bg-[#eee] fixed z-20 top-32 right-10 bg rounded-3xl shadow-GrayA p-6"
                                    >
                                        <p className="font-normal text-lg text-emerald-500">
                                            {toast}
                                        </p>
                                    </motion.div>
                                )
                            ) : (
                                <p className="font-light text-lg text-red-500">
                                    {toast}
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