import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'

const WhatITeach = () => {
    return (
        <Container id='id5' maxWidth='xl' sx={{ mb: '3rem' }}>
            <Typography variant='h4' textAlign={'center'} gutterBottom>
                Что я преподаю?
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 4 }}
                justifyContent='center'
            >
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            English for Children
                        </Typography>
                        <Typography variant='body1' textAlign={'center'}>
                            Английский для детей
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            General English A1-C1
                        </Typography>
                        <Typography variant='body1' textAlign={'center'}>
                            Общий английский
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            Business English A1-C1
                        </Typography>
                        <Typography variant='body1' textAlign={'center'}>
                            Бизнес английский
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            English for Specific Purposes A1-C1
                        </Typography>
                        <Typography variant='body1' textAlign={'center'}>
                            Английский для специальных целей
                            (медицина,маркетинг, т.д)
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            Подготовка к ОГЭ
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            Подготовка к ЕГЭ
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            Немецкий язык для детей А1-B1
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper
                        elevation={6}
                        sx={{ padding: { xs: '1rem', md: '3rem' } }}
                    >
                        <Typography variant='h5' textAlign={'center'}>
                            Немецкий язык для взрослых A1-B1
                        </Typography>
                    </Paper>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default WhatITeach
