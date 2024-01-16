import '@/styles/Footer.css'

import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillCheckCircle } from 'react-icons/ai'

// import { client } from "../../client";
import { images } from '@/constants'
import { sendEmail } from '@/utils/email'

const Footer = () => {
    const { t } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useRef<HTMLFormElement>(null)

    const { name, email, message } = formData

    const handleChangeInput = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        await sendEmail(form)
        setLoading(false)
        setFormSubmitted(true)
        // const contact = {
        //   _type: "contact",
        //   name,
        //   email,
        //   message,
        // };

        // client.create(contact).then(() => {
        //   setLoading(false);
        //   setFormSubmitted(true);
        // });
    }

    return (
        <>
            <h2 className="text-[1.5rem] sm:text-[2rem] font-[800]">
                {t('contactTitle')} &#128521;
            </h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:jbsselim@gmail.com">jbsselim@gmail.com</a>
                </div>
            </div>

            {!formSubmitted ? (
                <form ref={form} className="app__footer-form app__flex" onSubmit={handleSubmit}>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder={t('namePlaceholder')}
                            name="name"
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <input
                            className="p-text"
                            type="text"
                            placeholder={t('emailPlaceholder')}
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder={t('textareaPlaceholder')}
                            name="message"
                            value={message}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type="submit">{loading ? t('sendTextLoad') : t('sendText')}</button>
                </form>
            ) : (
                <div className="app__footer-form-success">
                    <AiFillCheckCircle />
                    <h3>Thank you for getting in touch</h3>
                </div>
            )}
        </>
    )
}

export default Footer
