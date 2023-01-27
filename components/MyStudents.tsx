import { Box, Typography, Stack } from '@mui/material'
import Container from '@mui/material/Container/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import Groups2Icon from '@mui/icons-material/Groups2'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'
import GroupIcon from '@mui/icons-material/Group'
import Image from 'next/image'
import img from '../src/img/image2.webp'
import styles from '../styles/MyStudents.module.scss'

const MyStudents = () => {
    return (
        <Container id='id4' maxWidth='xl' sx={{ mb: '3rem' }}>
            <Stack
                justifyContent='center'
                gap='1rem'
                flexDirection={{ xs: 'column', md: 'row' }}
            >
                <Box sx={{ maxWidth: '800px' }}>
                    <Typography variant='h4' gutterBottom>
                        Кто мои студенты?
                    </Typography>
                    <Typography variant='body1' sx={{ mb: '1rem' }}>
                        Я работаю с несколькими категориями студентов:
                    </Typography>

                    <Grid2 container sx={{ mb: '1rem' }}>
                        <Grid2 xs={1}>
                            <EscalatorWarningIcon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Дошкольники и младшие школьники
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <Groups2Icon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Средняя школа и подготовка к ОГЭ
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <Groups2Icon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Старшая школа и подготовка к ЕГЭ
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <PeopleAltIcon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Взрослые ученики
                            </Typography>
                        </Grid2>
                        <Grid2 xs={1}>
                            <GroupIcon color='primary' />
                        </Grid2>
                        <Grid2 xs={11}>
                            <Typography variant='body1'>
                                Дети с двуязычием с языковой парой
                                английский-русский
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
                <Box>
                    <Image
                        src={img}
                        alt={'img'}
                        className={styles.image}
                        priority
                    />
                </Box>
            </Stack>
        </Container>
    )
}

export default MyStudents
