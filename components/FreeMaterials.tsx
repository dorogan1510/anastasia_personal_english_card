import ArticleIcon from '@mui/icons-material/Article'
import LanguageIcon from '@mui/icons-material/Language'
import ShareIcon from '@mui/icons-material/Share'
import TranslateIcon from '@mui/icons-material/Translate'
import { Box, Container } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import scr1 from '../src/img/scr1.webp'
import scr2 from '../src/img/scr2.webp'
import scr3 from '../src/img/scr3.webp'
import scr4 from '../src/img/scr4.webp'
import scr5 from '../src/img/scr5.webp'
import scr6 from '../src/img/scr6.webp'
import scr7 from '../src/img/scr7.webp'
import scr8 from '../src/img/scr8.webp'
import scr9 from '../src/img/scr9.webp'
import scr10 from '../src/img/scr10.webp'
import scr11 from '../src/img/scr11.webp'
import scr12 from '../src/img/scr12.webp'

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
    {
        id: 6,
        img: scr7,
        text: 'Уроки по теме "Рождество и Новый Год" для взрослых',
        href: 'https://amazy.uk/lessons/45764',
    },
    {
        id: 7,
        img: scr8,
        text: 'Уроки по теме "Рождество и Новый Год" для взрослых',
        href: 'https://amazy.uk/lessons/45761',
    },
    {
        id: 8,
        img: scr9,
        text: 'Рождественский урок для детей',
        href: 'https://amazy.uk/lessons/45362',
    },
    {
        id: 9,
        img: scr10,
        text: 'Уроки для взрослых по рождественским песням',
        href: 'https://amazy.uk/lessons/45269',
    },
    {
        id: 10,
        img: scr11,
        text: 'Уроки для взрослых по рождественским песням',
        href: 'https://amazy.uk/lessons/43317',
    },
    {
        id: 11,
        img: scr12,
        text: 'Уроки для взрослых по рождественским песням',
        href: 'https://amazy.uk/lessons/43068',
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
        <Container id='id10' maxWidth='xl'>
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

                <Box sx={{ maxWidth: '800px' }}>
                    <Typography variant='body1' sx={{ mb: '1rem' }}>
                        Здесь я рассказываю про:
                    </Typography>

                    <Grid2 container sx={{ mb: '1rem' }}>
                        <Grid2 xs={1}>
                            <TranslateIcon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Лингвистические интересности
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <ArticleIcon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Пишу статьи о преподавании и языковых лайфхаках
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <ShareIcon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Делюсь полезными ссылками для изучения
                                английского
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <LanguageIcon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Рассказываю про сложные языковые явления простым
                                языком
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                className='animate-right'
                sx={{ mb: '3rem' }}
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
            <Typography
                variant='h4'
                sx={{
                    textAlign: 'center',
                    fontWeight: 700,
                }}
            >
                До встречи на занятиях!
            </Typography>
            <Typography
                variant='body1'
                sx={{
                    textAlign: 'center',
                    fontWeight: 700,
                }}
            >
                Ваша Zazafox
            </Typography>
            <Typography
                variant='body1'
                sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    fontWeight: 700,
                }}
            >
                🦊{' '}
            </Typography>
        </Container>
    )
}

export default FreeMaterials
