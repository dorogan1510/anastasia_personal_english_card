import { Typography } from '@mui/material'
import Container from '@mui/material/Container/Container'
import React from 'react'
import styles from '../styles/MyLessons.module.scss'

const MyLessons = () => {
    return (
        <Container id='id6' maxWidth='xl' sx={{ mb: '3rem' }}>
            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: { xs: 'left', md: 'center' } }}
                className='animate-center'
            >
                Что вы увидите у меня на уроке?
            </Typography>
            <Typography variant='body1' gutterBottom className='animate-left'>
                Мои уроки строятся на индивидуальном подходе к целям и нуждам
                ученика. Перед началом занятий мы с вами созваниваемся и
                обсуждаем ваш опыт изучения языка,цели,предпочтения и ожидания
                от обучения. Программа, которую подбираю для учеников по ходу
                курса в дальнейшем корректируется в соответствии с успехами и
                пожеланиями ученика.
            </Typography>
            <Typography
                variant='body1'
                sx={{ mb: '2rem' }}
                className='animate-right'
            >
                Мои уроки проходят на платформах Edvibe,Amazy, Miro и Google
                Jjamboard. Каждый урок я создаю лично и стараюсь сделать его
                максимально интерактивным, красочным и интересным для ученика.
            </Typography>

            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: { xs: 'left', md: 'center' } }}
                className='animate-center'
            >
                Какие ресурсы я использую на своих уроках?
            </Typography>
            <Typography variant='body1' gutterBottom className='animate-left'>
                Помимо индивидуально подобранных учебных пособий, я вношу
                разнообразие в свои уроки с помощью песен, коротких фильмов и
                статей на английском языке. У каждого моего студента есть
                возможность заниматься по аутентичным ресурсам по любимой
                тематике.
            </Typography>
        </Container>
    )
}

export default MyLessons
