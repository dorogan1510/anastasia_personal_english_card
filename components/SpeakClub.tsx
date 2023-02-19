import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import MonitorIcon from '@mui/icons-material/Monitor'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Stack,
    Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import Link from 'next/link'

const SpeakClub = () => {
    return (
        <Container maxWidth='xl'>
            <Box className='animate-center'>
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                >
                    Разговорный клуб английского языка с носителем
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Если тебе{' '}
                    <b>не хватает разговорной практики английского языка</b> и
                    ты хотел(а) бы использовать свои знания языка и навыки в
                    общении с единомышленниками на разные темы, то мой{' '}
                    <b>разговорный клуб - это отличная возможность</b> не только
                    <b>“пустить в ход”</b> и <b>отточить имеющиеся знания</b> и
                    приемы в английском, но и{' '}
                    <b>узнать много новой лексики и грамматики</b> на самые
                    разные разговорные темы в уютной атмосфере нашего клуба!
                </Typography>
                <Typography variant='body1' gutterBottom>
                    А еще наш разговорный клуб проходит{' '}
                    <b>с носителем английского языка,</b> поэтому не пропустите
                    отличную возможность напрямую пообщаться с представителем
                    Англии!
                </Typography>
                <Typography variant='body1' sx={{ mb: '2rem' }}>
                    Примеры наших уютных встреч разговорного клуба можно
                    посмотреть в моем блоге{' '}
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={'https://www.instagram.com/zazafox/'}
                        target='_blank'
                    >
                        @zazafox
                    </Link>{' '}
                    в разделе “S.Club”
                </Typography>
            </Box>
            <Box className='animate-center'>
                <Typography
                    variant='h4'
                    textAlign={{ xs: 'left', md: 'center' }}
                    sx={{ mb: '1rem' }}
                >
                    Немного о разговорных сессиях
                </Typography>
            </Box>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={{ xs: '0.5rem', md: '1rem' }}
                justifyContent={'center'}
                className='animate-left'
                sx={{ mb: '3rem' }}
            >
                <Stack
                    sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                    gap={{ xs: '1rem', md: '2rem' }}
                >
                    <Stack
                        gap='0.5rem'
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                    >
                        <AccessTimeIcon
                            color='primary'
                            sx={{ width: 40, height: 40 }}
                        />
                        <Typography
                            variant='body1'
                            textAlign={{ xs: 'left', md: 'center' }}
                        >
                            Длительность: 60 минут
                        </Typography>
                    </Stack>
                    <Stack
                        gap='0.5rem'
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                    >
                        <EmojiPeopleIcon
                            color='primary'
                            sx={{ width: 40, height: 40 }}
                        />
                        <Typography
                            variant='body1'
                            textAlign={{ xs: 'left', md: 'center' }}
                        >
                            Количество участников: до 8 человек
                        </Typography>
                    </Stack>
                    <Stack
                        gap='0.5rem'
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                    >
                        <MonitorIcon
                            color='primary'
                            sx={{ width: 40, height: 40 }}
                        />
                        <Typography
                            variant='body1'
                            textAlign={{ xs: 'left', md: 'center' }}
                        >
                            Платформа проведения: Miro, Zoom
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                className='animate-center'
            >
                Цены на разговорные сессии
            </Typography>

            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 2 }}
                justifyContent='center'
                sx={{ mb: '1rem' }}
            >
                <Grid2 className='animate-left'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Разовый проход на сессию
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                60 минут
                            </Typography>
                            <Typography variant='h4'>₽500</Typography>
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
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Абонемент на 4 сессии
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                60 минут
                            </Typography>
                            <Typography variant='h4'>₽1800</Typography>
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
            <Box className='animate-center'>
                <Typography
                    variant='body1'
                    gutterBottom
                    sx={{
                        textAlign: { xs: 'left', md: 'center' },
                        fontWeight: 700,
                    }}
                >
                    За подробностями о дате и времени обратитесь в директ моего
                    блога{' '}
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={'https://www.instagram.com/zazafox/'}
                        target='_blank'
                    >
                        @zazafox
                    </Link>
                </Typography>
                <Typography
                    variant='body1'
                    gutterBottom
                    sx={{
                        mb: '3rem',
                        textAlign: { xs: 'left', md: 'center' },
                        fontWeight: 700,
                    }}
                >
                    Приходи и прокачай свой английский с удовольствием на наших
                    уютных сессиях!
                </Typography>
            </Box>
        </Container>
    )
}

export default SpeakClub
