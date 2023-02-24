import CreateIcon from '@mui/icons-material/Create'
import FeedbackIcon from '@mui/icons-material/Feedback'
import NotesIcon from '@mui/icons-material/Notes'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import SchoolIcon from '@mui/icons-material/School'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

const Mentor = () => {
    return (
        <Container id='id8' maxWidth='xl'>
            <Box className='animate-center'>
                <Typography
                    variant='h4'
                    sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                >
                    Менторство
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        mb: '1rem',
                        textAlign: { xs: 'flex-start', md: 'center' },
                    }}
                >
                    Оффлайн-курирование (английский язык)
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Если у тебя загруженные будни и найти стабильное время для
                    учебных встреч для тебя бывает проблематично, то{' '}
                    <b>
                        формат оффлайн-курирования - твой отличный вариант не
                        отказывать себе в изучении английского!
                    </b>
                </Typography>
                <Typography variant='body1' sx={{ mb: '2rem' }}>
                    Перед началом курирования мы проведем созвон, где ты
                    обозначишь свой запрос и цели,временные рамки, а я
                    проанализирую твой уровень и моменты в языке, которые нужно
                    проработать.
                </Typography>
            </Box>
            <Box>
                <Typography variant='body1' sx={{ mb: '1rem' }}>
                    После созвона я составлю индивидуальный курс английского
                    специально для тебя на платформах <b>EDVIBE</b> или{' '}
                    <b>AMAZY,</b> где я буду:
                </Typography>

                <Grid2 container sx={{ mb: '2rem', maxWidth: '800px' }}>
                    <Grid2 xs={1}>
                        <TrendingUpIcon color='primary' />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Typography variant='body1'>
                            Отслеживать твой прогресс на уроках
                        </Typography>
                    </Grid2>
                    <Grid2 xs={1}>
                        <NotesIcon color='primary' />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Typography variant='body1'>
                            Проверять твои Д/З
                        </Typography>
                    </Grid2>
                    <Grid2 xs={1}>
                        <CreateIcon color='primary' />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Typography variant='body1'>
                            Оставлять свои комментарии к дальнейшему обучению.
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>
            <Box>
                <Typography variant='body1' sx={{ mb: '1rem' }}>
                    Раз в неделю мы проводим <b>онлайн-созвон на 35 минут,</b>{' '}
                    где ты можешь:
                </Typography>

                <Grid2 container sx={{ mb: '1rem', maxWidth: '800px' }}>
                    <Grid2 xs={1}>
                        <QuestionMarkIcon color='primary' />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Typography variant='body1'>
                            Задать интересующие вопросы
                        </Typography>
                    </Grid2>
                    <Grid2 xs={1}>
                        <FeedbackIcon color='primary' />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Typography variant='body1'>
                            Дать обратную связь по курсу (пожелания,комментарии)
                        </Typography>
                    </Grid2>
                    <Grid2 xs={1}>
                        <SchoolIcon color='primary' />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Typography variant='body1'>
                            Практиковать полученные знания со мной в беседе и
                            заданиях, которые я приготовлю для урока
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>

            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                className='animate-center'
            >
                Доступные форматы обучения
            </Typography>

            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                sx={{ mb: '1rem' }}
            >
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275, maxWidth: 600 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Курирование на месяц
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                Длительность курирования - 4 недели
                                <br /> Количество онлайн-созвонов - 4 <br />{' '}
                                Количество оффлайн-уроков на платформе- 8 (2
                                урока в неделю)
                            </Typography>
                            <Typography variant='h4'>₽9000</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://www.instagram.com/zazafox/'
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
                    <Card sx={{ minWidth: 275, maxWidth: 600 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                1 оффлайн урок + 1 созвон
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                Для тех, кто хотел бы освоить/ разобраться в
                                отдельной теме и практиковать ее в заданиях/на
                                созвоне
                            </Typography>
                            <Typography variant='h4'>₽1300</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href='https://www.instagram.com/zazafox/'
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

export default Mentor
