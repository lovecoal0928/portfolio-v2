// 入力フォームのバリデーション管理
export const validate = ({
    name,
    email,
    message,
}: {
    name: string
    email: string
    message: string
}) => {
    const errors: { name?: string; email?: string; message?: string } = {}
    if (!name || name.trim() === "") {
        errors.name = "名前を入力してください"
    }
    if (!email || email.trim() === "") {
        errors.email = "メールアドレスを入力してください"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "メールアドレスを入力してください"
    }
    if (!message || message.trim() === "") {
        errors.message = "メッセージを入力してください"
    }
    return errors
}