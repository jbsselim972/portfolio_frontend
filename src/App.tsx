import '@/styles/App.css'
import '@/i18n'

import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import Navbar from './components/Navbar/Navbar'
import { Skeleton } from './components/UI/skeleton'
import { About, Footer, Header, Quote, Skills, Work } from './container'

const LoadingApp = () => {
    return (
        <div className="flex flex-col p-0 gap-y-2 h-full">
            <Skeleton className="flex h-[100px] bg-gray-400  rounded-none" />
            <Skeleton className="flex h-[640px] bg-gray-400 rounded-none" />
        </div>
    )
}

const App = () => {
    const { t } = useTranslation()
    const year = new Date().getFullYear()
    document.title = t('title')
    return (
        <Suspense fallback={<LoadingApp />}>
            <div className="app">
                <Navbar />
                <Header />
                <Quote />
                <About />
                <Skills />
                <Work />
                <Footer />
                <div className="copyright">
                    <p className="p-text">@{year} JBSSELIM</p>
                </div>
                <Analytics />
            </div>
        </Suspense>
    )
}

export default App
