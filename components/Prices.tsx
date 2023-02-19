import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Container,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'

const Prices = () => {
    return (
        <Container id='id7' maxWidth='xl'>
            <Typography
                variant='h4'
                sx={{ mb: '1rem', textAlign: { xs: 'left', md: 'center' } }}
                className='animate-center'
            >
                Сколько стоят занятия со мной?
            </Typography>

            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 3 }}
                justifyContent='center'
                sx={{ mb: '1rem' }}
            >
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Индивидуальное занятие
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                45 минут
                            </Typography>
                            <Typography variant='h4'>₽1700</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 className='animate-right'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Индивидуальное занятие
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                55 минут
                            </Typography>
                            <Typography variant='h4'>₽2000</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Индивидуальное занятие
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                90 минут
                            </Typography>
                            <Typography variant='h4'>₽2800</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
            </Grid2>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                sx={{ mb: '3rem' }}
            >
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Групповое занятие онлайн
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                Занятие в паре 55 минут
                            </Typography>
                            <Typography variant='h4'>₽1500</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 className='animate-right'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Групповое занятие онлайн
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                Занятие в группе из 4х человек 55 минут
                            </Typography>
                            <Typography variant='h4'>₽1100</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Инд. занятие по немецкому языку
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                45 минут
                            </Typography>
                            <Typography variant='h4'>₽1300</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 className='animate-right'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Инд. занятие по немецкому языку
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                60 минут
                            </Typography>
                            <Typography variant='h4'>₽1500</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
            </Grid2>

            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                className='animate-center'
            >
                Консультации по определенному запросу
            </Typography>
            <Typography variant='body1' gutterBottom className='animate-center'>
                Свяжитесь со мной в whatsapp или insta и опишите проблему, с
                которой столкнулись в изучении английского языка, это может быть
                грамматика, лексика, произношение или другие аспекты и навыки. Я
                внимательно изучу нашу проблему и приготовлю презентацию с
                материалами для решения вашего вопроса, а после консультации у
                вас также останется запись нашего звонка.
            </Typography>
            <Typography
                variant='body1'
                className='animate-center'
                sx={{ mb: '3rem' }}
            >
                Вы можете записаться на консультацию с длительностью 60 и 90
                минут.
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                sx={{ mb: '3rem' }}
            >
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Консультация по запросу
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                60 минут
                            </Typography>
                            <Typography variant='h4'>₽1500</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 className='animate-right'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Консультация по запросу
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                90 минут
                            </Typography>
                            <Typography variant='h4'>₽2300</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
            </Grid2>

            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                className='animate-center'
            >
                Консультация для начинающих преподавателей
            </Typography>

            <Typography
                variant='body1'
                sx={{ mb: '2rem' }}
                className='animate-center'
            >
                Также если Вы — начинающий преподаватель или делаете свои первые
                шаги в преподавании ОНЛАЙН и хотите узнать о полезных сайтах и
                ресурсах, усовершенствовать свои навыки работы в онлайн или же
                научиться выстраивать урок эффективно и интересно для ученика,
                то я предлагаю Вам записаться на консультацию для
                преподавателей. В комплект консультации входят: запись звонка на
                1.5 часа+презентация с материалами и рекомендациями.
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                sx={{ mb: '3rem' }}
            >
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Консультация для преподавателей
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                90 минут
                            </Typography>
                            <Typography variant='h4'>₽2000</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://api.whatsapp.com/send?phone=79060725588&text='
                                size='small'
                                variant='contained'
                                target='_blank'
                            >
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default Prices
