import { Box, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import MonitorIcon from '@mui/icons-material/Monitor'
import SchoolIcon from '@mui/icons-material/School'
import BusinessIcon from '@mui/icons-material/Business'
import england from '../src/img/england.png'
import china from '../src/img/china.png'
import usa from '../src/img/usa.png'
import React from 'react'
import Image from 'next/image'

const WhoAmI = () => {
    return (
        <Container id='id2' maxWidth='xl' sx={{ mb: '3rem' }}>
            <Typography
                variant='h4'
                gutterBottom
                textAlign={{ xs: 'left', md: 'center' }}
            >
                Кто я?
            </Typography>
            <Typography
                variant='h5'
                textAlign={{ xs: 'left', md: 'center' }}
                gutterBottom
            >
                Я - профессиональный онлайн-репетитор английского и немецкого
                языков для взрослых и детей с 2015 года.
            </Typography>
            <Typography
                variant='h5'
                sx={{ mb: '1rem' }}
                textAlign={{ xs: 'left', md: 'center' }}
            >
                За время моего преподавания я работала:
            </Typography>

            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={{ xs: '0.5rem', md: '1rem' }}
                justifyContent={'center'}
            >
                <Stack flexDirection='column' gap={{ xs: '1rem', md: '2rem' }}>
                    <Stack gap='0.5rem' alignItems={'flex-start'}>
                        <MonitorIcon
                            color='primary'
                            sx={{ width: 40, height: 40 }}
                        />
                        <Typography variant='body1' textAlign={'center'}>
                            В онлайн-школе
                        </Typography>
                    </Stack>
                    <Stack gap='0.5rem' alignItems={'flex-start'}>
                        <BusinessIcon
                            color='primary'
                            sx={{ width: 40, height: 40 }}
                        />
                        <Typography variant='body1' textAlign={'center'}>
                            В частной гимназии в подмосковье
                        </Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection='column' gap={{ xs: '1rem', md: '2rem' }}>
                    <Stack gap='0.5rem' alignItems={'flex-start'}>
                        <SchoolIcon
                            color='primary'
                            sx={{ width: 40, height: 40 }}
                        />
                        <Typography variant='body1' textAlign={'center'}>
                            А также подготовила 10 учеников к успешной сдаче ОГЭ
                            и ЕГЭ
                        </Typography>
                    </Stack>
                    <Stack gap='0.5rem' alignItems={'flex-start'}>
                        <Image
                            src={england}
                            alt={'england'}
                            height={40}
                            width={40}
                        />

                        <Typography variant='body1' textAlign={'center'}>
                            С билингвом из Англии
                        </Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection='column' gap={{ xs: '1rem', md: '2rem' }}>
                    <Stack gap='0.5rem' alignItems={'flex-start'}>
                        <Image src={usa} alt={'usa'} height={40} width={40} />
                        <Typography variant='body1' textAlign={'center'}>
                            С билингвом из Америки
                        </Typography>
                    </Stack>
                    <Stack gap='0.5rem' alignItems={'flex-start'}>
                        <Image
                            src={china}
                            alt={'china'}
                            height={40}
                            width={40}
                        />
                        <Typography variant='body1' textAlign={'center'}>
                            С ученицей из Китая
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

export default WhoAmI
