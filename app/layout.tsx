'use client'

import Header from '@/components/Header'
import '../styles/globals.scss'
import theme from '../styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Footer from '@/components/Footer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
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
