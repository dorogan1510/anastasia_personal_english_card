'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import '../styles/globals.scss'
import theme from '../styles/theme'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [scroll, setScroll] = React.useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        const scrollByElementLeft = document.querySelectorAll('.animate-left')
        const scrollByElementRight = document.querySelectorAll('.animate-right')
        const scrollByElementCenter =
            document.querySelectorAll('.animate-center')

        const animationCycle = (event: any) => {
            for (var i = 0; i < event.length; i++) {
                const windowHeight = window.innerHeight
                const elementTop = event[i].getBoundingClientRect().top
                const elementVisible = 130

                if (elementTop < windowHeight - elementVisible) {
                    event[i].classList.add('__active')
                } else {
                    event[i].classList.remove('__active')
                }
            }
        }

        animationCycle(scrollByElementLeft)
        animationCycle(scrollByElementRight)
        animationCycle(scrollByElementCenter)
    })
    return (
        <html lang='en'>
            <head />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <body className='body'>
                    <div className='page'>
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </body>
            </ThemeProvider>
        </html>
    )
}
