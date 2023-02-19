import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Container, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import style from '../styles/Footer.module.scss'

const pages = [
    {
        id: '#id2',
        link: 'Обо мне',
    },
    {
        id: '#id3',
        link: 'Образование',
    },
    {
        id: '#id4',
        link: 'Мои студенты',
    },
    {
        id: '#id5',
        link: 'Мои уроки',
    },
    {
        id: '#id6',
        link: 'Ресурсы',
    },
    {
        id: '#id7',
        link: 'Мои цены',
    },
    {
        id: '#id8',
        link: 'Отзывы',
    },
    {
        id: '#id9',
        link: 'Материалы',
    },
]

const Footer = () => {
    return (
        <footer id='id10'>
            <Container
                maxWidth='xl'
                sx={{ backgroundColor: 'primary.main', padding: '2rem' }}
            >
                <Typography
                    variant='h5'
                    sx={{
                        color: 'secondary.main',
                        textAlign: 'center',
                    }}
                >
                    Контакты
                </Typography>
                <Typography
                    variant='body1'
                    sx={{
                        color: 'secondary.main',
                        textAlign: 'center',
                        mb: '1rem',
                    }}
                >
                    Свяжитесь со мной любыми способами:
                </Typography>
                <Stack
                    flexDirection={{ xs: 'column', md: 'row' }}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    justifyContent={'center'}
                    gap='1rem'
                    sx={{ mb: '1rem' }}
                >
                    <Stack
                        flexDirection={'row'}
                        gap='0.5rem'
                        justifyContent={'center'}
                        alignItems='center'
                    >
                        <InstagramIcon color='secondary' />
                        <Link
                            href={'https://www.instagram.com/zazafox/'}
                            className={style.link}
                            target='_blank'
                        >
                            <Typography variant='body2'>Instagram</Typography>
                        </Link>
                    </Stack>
                    <Stack
                        flexDirection={'row'}
                        justifyContent='center'
                        gap='1rem'
                    >
                        <Stack
                            flexDirection={'row'}
                            gap='0.5rem'
                            alignItems={'center'}
                        >
                            <TelegramIcon color='secondary' />
                            <Link
                                href={'https://t.me/+79060725588'}
                                className={style.link}
                                target='_blank'
                            >
                                <Typography variant='body2'>
                                    Telegram
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack
                        flexDirection={'row'}
                        justifyContent='center'
                        gap='1rem'
                    >
                        <Stack
                            flexDirection={'row'}
                            gap='0.5rem'
                            alignItems={'center'}
                        >
                            <WhatsAppIcon color='secondary' />
                            <Link
                                href={
                                    'https://api.whatsapp.com/send?phone=79060725588&text='
                                }
                                className={style.link}
                                target='_blank'
                            >
                                <Typography variant='body2'>
                                    WhatsApp
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </footer>
    )
}

export default Footer
