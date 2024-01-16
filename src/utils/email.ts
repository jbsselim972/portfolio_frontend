import emailjs from '@emailjs/browser'
import { RefObject } from 'react'

export const sendEmail = (form: RefObject<HTMLFormElement>) => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const userId = import.meta.env.VITE_USER_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID

    const formRef = form.current ? form.current : ''
    return emailjs.sendForm(userId, templateId, formRef, publicKey)
}
