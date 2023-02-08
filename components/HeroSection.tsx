import { Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/HeroSection.module.scss'
import image1 from '../src/img/image1.webp'
import { Box } from '@mui/system'
import Balancer from 'react-wrap-balancer'

const HeroSection = () => {
    return (
        <Container id='id1' maxWidth='xl' sx={{ mb: '3rem' }}>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent='space-between'
                alignItems={{ xs: 'flex-start', md: 'center' }}
                gap='1rem'
            >
                <Box maxWidth='lg'>
                    <Balancer>
                        <Typography
                            variant='h1'
                            sx={{ mb: '1rem' }}
                            className='animate-hero-left'
                        >
                            Всем привет! Я Анастасия Танн — дипломированный
                            преподаватель английского и немецкого языков
                        </Typography>
                    </Balancer>
                    <Balancer>
                        <Typography
                            variant='subtitle1'
                            sx={{ mb: '1rem' }}
                            className='animate-hero-left'
                        >
                            Со мной ты научишься общаться на английском и
                            немецком и сложные грамматические конструкции,
                            лексические обороты станут понятными и легкими в
                            использовании
                        </Typography>
                    </Balancer>
                    <Button
                        href='https://api.whatsapp.com/send?phone=79256825060&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA.'
                        variant='contained'
                        sx={{ textAlign: 'center' }}
                        target='_blank'
                        className='animate-hero-left'
                    >
                        Записаться на бесплатный пробный урок
                    </Button>
                </Box>
                <Box className='animate-hero-right'>
                    <Image
                        src={image1}
                        alt={'image1'}
                        className={styles.image}
                        priority
                    />
                </Box>
            </Stack>
        </Container>
    )
}

export default HeroSection
