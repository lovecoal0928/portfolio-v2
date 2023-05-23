import React, { useRef } from "react"
import { motion } from "framer-motion"

const Contact = () => {

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(nameRef.current?.value)

        let data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        };

        await fetch("api/contact", {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if(res.status == 200) console.log("メール送信成功")
        })
    }

    return (
        <div id='contact' className='bg-red-950 w-full text-[#eee]'>
            <div className='py-6 md:p-10'>
                <h1 className='flex text-4xl m-6 text-center drop-shadow-RED justify-center'>- CONTACT -</h1>
                <p className='flex font-light mx-auto text-2xl px-5 md:px-0 text-center drop-shadow-RED justify-center w-[460px] md:w-[500px] xl:w-[900px]'>
                    最後までご覧いただきありがとうございました。<br/>
                    もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。</p>
                <div className="m-5 mx-auto w-[380px] md:w-[600px] xl:w-[900px]">
                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                        <div className="flex flex-col xl:flex-row xl:w-full xl:space-x-10 mb-3">
                            <motion.div
                                    transition={{delay: 0.2}}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="flex flex-col xl:w-1/2">
                                <label htmlFor="name" className="FormLabel">
                                    お名前
                                </label>
                                <input type="text" className="FormBox" id="name" ref={nameRef} required placeholder="Name"/>
                            </motion.div>
                            <motion.div
                                    transition={{delay: 0.2}}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="flex flex-col xl:w-1/2">
                                <label htmlFor="email" className="FormLabel">
                                    メールアドレス
                                </label>
                                <input type="email" className="FormBox autofill:bg-transparent" id="email" ref={emailRef} required placeholder="Email"/>
                            </motion.div>
                        </div>
                        <motion.div
                                    transition={{delay: 0.2}}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="flex flex-col mb-3">
                            <label htmlFor="message" className="FormLabel">
                                メッセージ
                            </label>
                            <textarea name="message" className="TextAREA" id="message" ref={messageRef} required placeholder="Message"/>
                        </motion.div>
                        <motion.div
                                    transition={{delay: 0.2}}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}>
                            <button type="submit" className="SubmitBtn">
                                送　信
                            </button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact