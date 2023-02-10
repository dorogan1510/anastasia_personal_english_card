import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import scr1 from '../src/img/scr1.png'
import scr2 from '../src/img/scr2.png'
import scr3 from '../src/img/scr3.png'
import scr4 from '../src/img/scr4.png'
import scr5 from '../src/img/scr5.png'
import scr6 from '../src/img/scr6.png'
import Grid2 from '@mui/material/Unstable_Grid2'
import Balancer from 'react-wrap-balancer'

const imgNames = [
    {
        id: 1,
        img: scr1,
        text: 'Гайд по теме: “Conditionals”',
        href: 'https://drive.google.com/file/d/1DXgxk5Ctpktp9WyKsVF56wwAg45pklff/view?usp=sharing',
    },
    {
        id: 2,
        img: scr2,
        text: 'Гайд по теме: “Предлоги английского языка с прилагательными”',
        href: 'https://drive.google.com/file/d/1pmYvwOZL8sqdotCRNpQQu4_OaHythHcl/view?usp=sharing',
    },
    {
        id: 3,
        img: scr3,
        text: 'Гайд по теме: “ТОП 5 приложений для знакомства с иностранцами”',
        href: 'https://drive.google.com/file/d/1ghy8o6ejsw0oxCpX0upbKtI6j1cesjgR/view?usp=sharing',
    },
    {
        id: 4,
        img: scr6,
        text: 'Мини-курс по сериалу “Эмили в Париже часть 1”',
        href: 'https://drive.google.com/file/d/1F8AAcgsr4yMdaZSxTLjSlT6QdgUlEx0F/view?usp=drivesdk',
    },
    {
        id: 5,
        img: scr6,
        text: 'Мини-курс по сериалу “Эмили в Париже часть 2”',
        href: 'https://drive.google.com/file/d/1Kr-Kj3ijxdqlIMd7hjTncnn6PfM7ZvOK/view?usp=drivesdk',
    },
]

const freeChannels = [
    {
        id: 6,
        img: scr4,
        text: 'Группа Вконтакте',
        href: 'https://vk.com/clubzazafox',
    },
    {
        id: 7,
        img: scr5,
        text: 'Телеграм канал',
        href: 'https://t.me/zazafoxsecrets',
    },
]

const FreeMaterials = () => {
    return (
        <Container id='id9' maxWidth='xl'>
            <Typography
                variant='h4'
                sx={{
                    textAlign: { xs: 'flex-start', md: 'center' },
                    mb: '2rem',
                }}
                className='animate-left'
            >
                Бесплатные материалы
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                sx={{ mb: '3rem' }}
                className='animate-right'
            >
                {imgNames.map(data => (
                    <Grid2 key={data.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component={'div'}>
                                <Image
                                    src={data.img}
                                    alt={'image'}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='body1'>
                                    <Balancer>{data.text}</Balancer>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={data.href}
                                    variant='contained'
                                    size='small'
                                    target='_blank'
                                >
                                    Получить
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
            <Box className='animate-left'>
                <Typography
                    variant='h4'
                    sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                    gutterBottom
                >
                    Бесплатные каналы по изучению английского
                </Typography>
                <Typography
                    variant='body1'
                    sx={{
                        textAlign: { xs: 'flex-start', md: 'center' },
                        mb: '2rem',
                    }}
                >
                    Здесь я рассказываю про лингвистические интересности,делюсь
                    полезными ссылками для изучения языка и рассказываю про
                    сложные языковые явления простым языком.
                </Typography>
            </Box>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                className='animate-right'
            >
                {freeChannels.map(data => (
                    <Grid2 key={data.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component={'div'}>
                                <Image
                                    src={data.img}
                                    alt={'image'}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='body1'>
                                    {data.text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={data.href}
                                    variant='contained'
                                    size='small'
                                    target='_blank'
                                >
                                    Перейти
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    )
}

export default FreeMaterials
