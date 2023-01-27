import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Button, Container, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
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
                >
                    <Stack
                        flexDirection={'row'}
                        gap='0.5rem'
                        justifyContent={'center'}
                        alignItems='center'
                    >
                        <InstagramIcon color='secondary' />
                        <Link
                            href={'https://t.me/danfrolov94'}
                            className={style.link}
                            target='_blank'
                        >
                            <Typography variant='body2'>Инстаграм</Typography>
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
                                href={'https://t.me/danfrolov94'}
                                className={style.link}
                                target='_blank'
                            >
                                <Typography variant='body2'>
                                    Основной
                                </Typography>
                            </Link>
                        </Stack>
                        <Stack
                            flexDirection={'row'}
                            gap='0.5rem'
                            alignItems={'center'}
                        >
                            <TelegramIcon color='secondary' />
                            <Link
                                href={'https://t.me/danfrolov94'}
                                className={style.link}
                                target='_blank'
                            >
                                <Typography variant='body2'>
                                    Дополнительный
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
                                href={'https://t.me/danfrolov94'}
                                className={style.link}
                                target='_blank'
                            >
                                <Typography variant='body2'>
                                    Основной
                                </Typography>
                            </Link>
                        </Stack>
                        <Stack
                            flexDirection={'row'}
                            gap='0.5rem'
                            alignItems={'center'}
                        >
                            <WhatsAppIcon color='secondary' />
                            <Link
                                href={'https://t.me/danfrolov94'}
                                className={style.link}
                                target='_blank'
                            >
                                <Typography variant='body2'>
                                    Дополнительный
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
