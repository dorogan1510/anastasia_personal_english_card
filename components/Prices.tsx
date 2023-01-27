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
                <Grid2>
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
                            <Button size='small' variant='contained'>
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2>
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
                            <Button size='small' variant='contained'>
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2>
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
                            <Button size='small' variant='contained'>
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
                <Grid2>
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
                            <Button size='small' variant='contained'>
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2>
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
                            <Button size='small' variant='contained'>
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
            >
                Консультации по определенному запросу
            </Typography>
            <Typography variant='body1' gutterBottom>
                Свяжитесь со мной в whatsapp или insta и опишите свою проблему.
                К нашей консультации я приготовлю презентацию с материалами и
                нужной вам информацией, после консультации вы также получите
                запись нашего звонка:
            </Typography>
            <Typography variant='body1' sx={{ mb: '2rem' }}>
                Свяжитесь со мной в whatsapp или instagram и опишите свою
                проблему. К нашей консультации я приготовлю презентацию с
                материалами и нужной вам информацией, после консультации вы
                также получите запись нашего звонка
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                sx={{ mb: '3rem' }}
            >
                <Grid2>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>Консультация</Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                60 минут
                            </Typography>
                            <Typography variant='h4'>₽1500</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' variant='contained'>
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>Консультация</Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                90 минут
                            </Typography>
                            <Typography variant='h4'>₽2300</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' variant='contained'>
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
            >
                Консультации для преподавателей
            </Typography>
            <Typography variant='body1' gutterBottom sx={{ mb: '2rem' }}>
                Если Вы-начинающий преподаватель или делаете свои первые шаги в
                преподавании ОНЛАЙН и хотите узнать о полезных сайтах и
                ресурсах,усовершенствовать свои навыки работы в онлайн или же
                научиться выстраивать урок эффективно и интересно для ученика,
                то я предлагаю Вам записаться на консультацию для
                преподавателей. В комплект консультации входят: запись звонка на
                1.5 часа+презентация с материалами и рекомендациями.
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 1 }}
                justifyContent='center'
                sx={{ mb: '3rem' }}
            >
                <Grid2>
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
                            <Button size='small' variant='contained'>
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
