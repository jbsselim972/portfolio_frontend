import '@/styles/Quote.css'

import { Trans, useTranslation } from 'react-i18next'

const Quote = () => {
    const { t: _t } = useTranslation()
    return (
        <div className="flex flex-col">
            <div className="capitalize  md:text-3xl font-[800]">
                <span className="text-secondary">&#8220;</span>
                <Trans i18nKey="quote" components={{ p: <p />, span: <span />, br: <br /> }}>
                    <p>
                        First, <span>solve</span> the problem.
                    </p>
                    <p>
                        Then, <span>write</span> the code.
                    </p>
                </Trans>
                <span className="flex text-secondary justify-end">&#8221;</span>
            </div>
            <span className="flex justify-end text-gray_color my-[1rem] mx-0 text-[15px]">
                - John Johnson
            </span>
        </div>
    )
}

export default Quote
