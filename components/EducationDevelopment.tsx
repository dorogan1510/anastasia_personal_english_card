import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container/Container'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import bachelor from '../src/certificates/bachelor.webp'
import cert1 from '../src/certificates/cert1.webp'
import cert2 from '../src/certificates/cert2.webp'
import cert3 from '../src/certificates/cert3.webp'
import master from '../src/certificates/master.webp'

import style from '../styles/EducationDevelopment.module.scss'
const EducationDevelopment = () => {
    return (
        <Container
            id='id3'
            className={style.background}
            maxWidth='xl'
            sx={{
                padding: '1rem',
                mb: '3rem',
                backgroundColor: '#e8745d',
                color: 'white',
            }}
        >
            <Grid2
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 6, md: 12 }}
                sx={{ mb: '3rem' }}
                className='animate-left'
            >
                <Grid2 xs={6} md={6}>
                    <Typography variant='h4' gutterBottom>
                        Какое у меня образование?
                    </Typography>
                    <Grid2 container sx={{ mb: '1rem' }}>
                        <Grid2 xs={1}>
                            <CheckCircleIcon color='secondary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                В 2018 году я получила степень бакалавра
                                Лингвистики
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <CheckCircleIcon color='secondary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                В 2020 году я стала магистром педагогических
                                наук
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>

                <Grid2 xs={6} md={6}>
                    <Box
                        sx={{
                            textAlign: 'center',
                            maxWidth: { xs: 400, md: 'none' },
                        }}
                    >
                        <Carousel autoPlay={false} navButtonsAlwaysVisible>
                            <Image
                                src={master}
                                alt={'master'}
                                className={style.image}
                                loading='lazy'
                            />
                            <Image
                                src={bachelor}
                                alt={'bachelor'}
                                className={style.image}
                                loading='lazy'
                            />
                        </Carousel>
                    </Box>
                </Grid2>
            </Grid2>
            <Grid2
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 6, md: 12 }}
                className='animate-left'
            >
                <Grid2 xs={6} order={{ xs: '1', md: '0' }}>
                    <Box
                        sx={{
                            textAlign: 'center',
                            maxWidth: { xs: 400, md: 'none' },
                        }}
                    >
                        <Carousel autoPlay={false} navButtonsAlwaysVisible>
                            <Image
                                className={style.image}
                                src={cert1}
                                alt={'cert1'}
                                style={{
                                    maxWidth: '585px',
                                    maxHeight: '413px',
                                }}
                                loading='lazy'
                            />

                            <Image
                                className={style.image}
                                src={cert2}
                                alt={'cert2'}
                                style={{
                                    maxWidth: '585px',
                                    maxHeight: '413px',
                                }}
                                loading='lazy'
                            />
                            <Image
                                className={style.image}
                                src={cert3}
                                alt={'cert3'}
                                style={{
                                    maxWidth: '585px',
                                    maxHeight: '413px',
                                }}
                                loading='lazy'
                            />
                        </Carousel>
                    </Box>
                </Grid2>
                <Grid2 xs={6}>
                    <Box>
                        <Typography variant='h4' gutterBottom>
                            Продолжаешь ли ты развиваться в преподавании?
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            Саморазвитие для меня - один из наибольших
                            приоритетов в жизни! Именно поэтому после окончания
                            университета я продолжила развиваться в сфере
                            преподавания и прошла множество курсов и
                            конференций, например:
                        </Typography>
                        <Grid2 container sx={{ mb: '1rem' }}>
                            <Grid2 xs={1}>
                                <CheckCircleIcon color='secondary' />
                            </Grid2>
                            <Grid2 xs={11}>
                                <Typography variant='body1'>
                                    Practical Teacher Course by International
                                    House in London
                                </Typography>
                            </Grid2>
                            <Grid2 xs={1}>
                                <CheckCircleIcon color='secondary' />
                            </Grid2>
                            <Grid2 xs={11}>
                                <Typography variant='body1'>
                                    Преподавание по методике Валерии Мещеряковой
                                </Typography>
                            </Grid2>
                            <Grid2 xs={1}>
                                <CheckCircleIcon color='secondary' />
                            </Grid2>
                            <Grid2 xs={11}>
                                <Typography variant='body1'>
                                    Преподавание на базе CELTA от Алены Рой
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default EducationDevelopment
