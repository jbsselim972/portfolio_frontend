import emailjs from '@emailjs/browser'

import { FormSchema } from '@/container/Footer/Footer'

export const sendEmail = async (data: FormSchema) => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const userId = import.meta.env.VITE_USER_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID

    return await emailjs.send(userId, templateId, data, publicKey)
}
