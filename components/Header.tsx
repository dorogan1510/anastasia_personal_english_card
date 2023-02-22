import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import * as React from 'react'
import logo from '../src/img/logo.webp'
import styles from '../styles/Header.module.scss'

const pages = [
    {
        id: '#id2',
        link: 'Обо мне',
    },
    {
        id: '#id3',
        link: 'Образование',
    },
    {
        id: '#id4',
        link: 'Мои студенты',
    },
    {
        id: '#id5',
        link: 'Мои уроки',
    },
    {
        id: '#id6',
        link: 'Ресурсы',
    },
    {
        id: '#id7',
        link: 'Мои цены',
    },
    {
        id: '#id8',
        link: 'Менторство',
    },
    {
        id: '#id9',
        link: 'Отзывы',
    },
    {
        id: '#id10',
        link: 'Материалы',
    },
    {
        id: '#id11',
        link: 'Контакты',
    },
]

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <header>
            <nav className={styles.header}>
                <Container>
                    <AppBar
                        position='fixed'
                        sx={{ padding: { xs: '0 0.5rem', md: '0 1rem' } }}
                    >
                        <Container maxWidth='xl'>
                            <Toolbar disableGutters>
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    className='animate-hero-left'
                                >
                                    <IconButton href='#id1' sx={{ p: 0 }}>
                                        <Image
                                            src={logo}
                                            alt={'logo'}
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: '50%' }}
                                            priority
                                        />
                                    </IconButton>
                                </Box>

                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: 'none', md: 'flex' },
                                        justifyContent: 'center',
                                    }}
                                >
                                    {pages.map(page => (
                                        <Button
                                            key={page.id}
                                            onClick={handleCloseNavMenu}
                                            href={page.id}
                                            sx={{
                                                my: 2,
                                                color: 'white',
                                                fontSize: '16px',
                                                display: 'block',
                                                textTransform: 'none',
                                            }}
                                            className='animate-hero-links'
                                        >
                                            {page.link}
                                        </Button>
                                    ))}
                                </Box>
                                <Box
                                    sx={{
                                        flexGrow: 0,
                                        display: { xs: 'flex', md: 'none' },
                                    }}
                                    className='animate-hero-right'
                                >
                                    <IconButton
                                        size='large'
                                        aria-label='account of current user'
                                        aria-controls='menu-appbar'
                                        aria-haspopup='true'
                                        onClick={handleOpenNavMenu}
                                        sx={{ color: 'white' }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id='menu-appbar'
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                md: 'none',
                                            },
                                        }}
                                    >
                                        {pages.map(page => (
                                            <MenuItem
                                                key={page.id}
                                                onClick={handleCloseNavMenu}
                                                color='white'
                                            >
                                                <Button
                                                    href={page.id}
                                                    sx={{
                                                        textTransform: 'none',
                                                    }}
                                                >
                                                    {page.link}
                                                </Button>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Container>
            </nav>
        </header>
    )
}

export default Header
