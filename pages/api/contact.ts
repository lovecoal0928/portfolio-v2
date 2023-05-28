import type { NextApiRequest, NextApiResponse } from "next"

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
type Data = {
    message: string
}

type mailContentProps = {
    name: string,
    email: string,
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method == "POST") {
        const { name, email, message,...props
        }: mailContentProps = req.body

        const msg =
        `名前： ${name.toUpperCase()}\r\n
        メールアドレス： ${email}\r\n
        メッセージ： ${message}`

        const data = {
            to: `${process.env.MY_EMAIL}`,
            from: `${process.env.MY_SENDGRID_EMAIL}`,
            subject:  `【Portfolio】${name.toUpperCase()}からのコンタクトメール`,
            text: `Email => ${email}`,
            html: msg.replace(/\r\n/g, "<br>"),
        }
        try {
            await sgMail.send(data)
            res.status(200).json({ message: "あなたのメッセージは正常に送信されました"})
            console.log(res)
        } catch (err) {
            res.status(500).json({ message: `メッセージの送信中に予期せぬエラーが発生しました。${err}`})
            console.log(res)
        }
    }
}