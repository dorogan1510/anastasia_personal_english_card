import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container/Container'
import React from 'react'
import styles from '../styles/MyLessons.module.scss'

const MyLessons = () => {
    return (
        <Container
            id='id6'
            maxWidth='xl'
            sx={{
                mb: '3rem',
                p: '1rem',
                backgroundColor: '#103550',
                color: 'white',
            }}
        >
            <Box className='animate-left'>
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ textAlign: { xs: 'left', md: 'center' } }}
                >
                    Что вы увидите у меня на уроке?
                </Typography>
                <Typography variant='body1' gutterBottom>
                    <b style={{ fontWeight: 900 }}>Мои уроки</b> строятся на
                    индивидуальном подходе к целям и нуждам ученика. Перед
                    началом занятий мы с вами созваниваемся и обсуждаем ваш опыт
                    изучения языка, цели, предпочтения и ожидания от обучения.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    <b style={{ fontWeight: 900 }}>Программа</b>, которую я
                    подбираю для учеников по ходу курса в дальнейшем
                    корректируется в соответствии с успехами и пожеланиями
                    ученика.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Мои уроки проходят на{' '}
                    <b style={{ fontWeight: 900 }}>
                        платформах Edvibe, Amazy, Miro
                    </b>{' '}
                    и <b style={{ fontWeight: 900 }}>Google Jjamboard.</b>
                </Typography>
                <Typography variant='body1' sx={{ mb: '2rem' }}>
                    Каждый урок я создаю лично и стараюсь сделать его не только{' '}
                    <b style={{ fontWeight: 900 }}>информативным,</b> но и
                    максимально{' '}
                    <b style={{ fontWeight: 900 }}>интерактивным, красочным</b>{' '}
                    и <b style={{ fontWeight: 900 }}>интересным</b> для ученика.
                </Typography>
            </Box>
            <Box className='animate-left'>
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ textAlign: { xs: 'left', md: 'center' } }}
                >
                    Какие ресурсы я использую на своих уроках?
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Помимо индивидуально подобранных учебных пособий, я вношу
                    разнообразие в свои уроки с помощью{' '}
                    <b style={{ fontWeight: 900 }}>
                        книг, песен, коротких фильмов, статей, и даже мемов и
                        инста\tiktok
                    </b>{' '}
                    постов на английском и немецких языках! У каждого моего
                    студента есть возможность заниматься по аутентичным ресурсам
                    по любимой тематике.
                </Typography>
            </Box>
        </Container>
    )
}

export default MyLessons
