import React, { useRef } from "react"

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
                <p className='flex font-light text-2xl mb-10 px-5 md:px-0 text-center drop-shadow-RED justify-center'>
                    最後までご覧いただきありがとうございました。<br/>
                    もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。</p>
                <div className="container mt-5">
                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="FormLabel">
                                お名前
                            </label>
                            <input type="text" className="FormBox" id="name" ref={nameRef} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="FormLabel">
                                メールアドレス
                            </label>
                            <input type="email" className="FormBox" id="email" ref={emailRef} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="FormLabel">
                                メッセージ
                            </label>
                            <textarea name="message" className="FormBox" id="message" ref={messageRef} required />
                        </div>
                        <button type="submit" className="SubmitBtn">
                            送信
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact