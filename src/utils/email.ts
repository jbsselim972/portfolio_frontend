import emailjs from '@emailjs/browser'

export const sendEmail = async (data: { email: string; name?: string; message?: string }) => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const userId = import.meta.env.VITE_USER_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID

    return await emailjs.send(userId, templateId, data, publicKey)
}
