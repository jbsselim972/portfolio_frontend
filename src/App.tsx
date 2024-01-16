import '@/styles/App.css'
import '@/i18n'

import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'

import Navbar from './components/Navbar/Navbar'
import { About, Footer, Header, Quote, Skills, Work } from './container'

const App = () => {
    const year = new Date().getFullYear()
    return (
        <Suspense fallback="loading">
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
