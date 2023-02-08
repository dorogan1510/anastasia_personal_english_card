import { createTheme } from '@mui/material/styles'
import { Inter, Montserrat, Raleway, Roboto } from '@next/font/google'

export const roboto = Raleway({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const theme = createTheme({
    palette: {
        background: {
            paper: '#efefef',
        },
        primary: {
            main: '#38b7b0',
            contrastText: 'white',
        },
        secondary: {
            main: '#fff',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 800,
            md: 1024,
            lg: 1200,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: {
            fontSize: '48px',
            fontWeight: 500,

            '@media (max-width:1024px)': {
                fontSize: '26px',
            },
        },
        h4: {
            fontWeight: 500,
            '@media (max-width:1024px)': {
                fontSize: '24px',
            },
        },
        h5: {
            '@media (max-width:1024px)': {
                fontSize: '16px',
            },
        },
        subtitle1: {
            fontSize: '20px',
            '@media (max-width:1024px)': {
                fontSize: '16px',
            },
        },
        body1: {
            fontSize: '18px',
            '@media (max-width:1024px)': {
                fontSize: '14px',
            },
        },
    },
})

export default theme
