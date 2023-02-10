import {
    Backdrop,
    Box,
    Button,
    Container,
    Fade,
    Modal,
    Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import img1 from '../src/img/reviews/1.webp'
import img2 from '../src/img/reviews/2.webp'
import img3 from '../src/img/reviews/3.webp'
import img4 from '../src/img/reviews/4.webp'
import img5 from '../src/img/reviews/5.webp'
import img6 from '../src/img/reviews/6.webp'
import img7 from '../src/img/reviews/7.webp'
import img8 from '../src/img/reviews/8.webp'
import img9 from '../src/img/reviews/9.webp'
import img10 from '../src/img/reviews/10.webp'
import styles from '../styles/Reviews.module.scss'

const imgNames = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 4,
        img: img4,
    },
    {
        id: 5,
        img: img5,
    },
    {
        id: 6,
        img: img6,
    },
    {
        id: 7,
        img: img7,
    },
    {
        id: 8,
        img: img8,
    },
    {
        id: 9,
        img: img9,
    },
    {
        id: 10,
        img: img10,
    },
]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 220, md: 330 },
    borderRadius: '20px',
}

const Reviews = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleClose = () => setOpen(false)

    const [modalImg, setModalImg] = useState<any>(null)

    return (
        <Container
            id='id8'
            maxWidth='xl'
            sx={{
                mb: '3rem',
                p: '1rem',
                backgroundColor: '#e8745d',
                color: 'white',
            }}
        >
            <Typography
                variant='h4'
                sx={{ textAlign: { xs: 'flex-start', md: 'center' } }}
                gutterBottom
                className='animate-center'
            >
                Отзывы о сотрудничестве со мной
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 5 }}
                justifyContent='center'
                className='animate-left'
            >
                {imgNames.map(data => (
                    <Grid2
                        key={data.id}
                        sx={{ maxWidth: { xs: '150px', md: '250px' } }}
                    >
                        <Button
                            onClick={() => {
                                setOpen(true)
                                setModalImg(data.img)
                            }}
                        >
                            <Image
                                className={styles.image}
                                src={data.img}
                                alt={'img1'}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '20px',
                                }}
                                priority
                            />
                        </Button>
                    </Grid2>
                ))}
            </Grid2>

            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Image
                            src={modalImg}
                            alt={'img'}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Fade>
            </Modal>
        </Container>
    )
}

export default Reviews
