import '@/styles/Footer.css'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AiFillCheckCircle } from 'react-icons/ai'
import { z } from 'zod'

import { images } from '@/constants'
import { sendEmail } from '@/utils/email'

const formSchema = z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().min(1, 'Email is required.'),
    message: z.string().optional(),
})

export type FormSchema = z.infer<typeof formSchema>

const Footer = () => {
    const { t } = useTranslation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    })

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit: SubmitHandler<FormSchema> = async (data) => {
        try {
            setLoading(true)
            await sendEmail(data)
            setFormSubmitted(true)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    return (
        <>
            {!formSubmitted ? (
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

                    <form className="app__footer-form app__flex" onSubmit={handleSubmit(onSubmit)}>
                        <div className="app__flex">
                            <input
                                className="p-text"
                                type="text"
                                placeholder={t('namePlaceholder')}
                                {...register('name')}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {' '}
                                {errors.name?.message}
                            </p>
                        )}
                        <div>
                            <input
                                className="p-text"
                                type="text"
                                placeholder={t('emailPlaceholder')}
                                {...register('email')}
                            />
                        </div>
                        {errors.email && (
                            <p className="flex justify-start text-xs italic text-red-500 mt-2">
                                {' '}
                                {errors.email?.message}
                            </p>
                        )}
                        <div>
                            <textarea
                                className="p-text"
                                placeholder={t('textareaPlaceholder')}
                                {...register('message')}
                            />
                        </div>
                        {errors.message && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {' '}
                                {errors.message?.message}
                            </p>
                        )}
                        <button type="submit">{loading ? t('sendTextLoad') : t('sendText')}</button>
                    </form>
                </>
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
