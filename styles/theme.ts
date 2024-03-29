import { createTheme } from '@mui/material/styles'
import {
    Inter,
    Montserrat,
    Raleway,
    Roboto,
    Open_Sans,
    Oswald,
    Merriweather,
} from '@next/font/google'

export const roboto = Raleway({
    weight: ['300', '400', '500', '700', '900'],
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
            fontWeight: 700,
            '@media (max-width:1024px)': {
                fontSize: '24px',
            },
        },
        h6: {
            fontWeight: 700,
            '@media (max-width:1024px)': {
                fontSize: '20px',
            },
        },
        h5: {
            fontWeight: 500,
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
            fontWeight: 500,

            '@media (max-width:1024px)': {
                fontSize: '14px',
            },
        },
    },
})

export default theme
