import { Link } from '@mui/material'

import styles from '../styles/Header.module.scss'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import logo from '../src/img/logo.webp'
import Image from 'next/image'

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
        link: 'Отзывы',
    },
    {
        id: '#id9',
        link: 'Материалы',
    },
    {
        id: '#id10',
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
                                <Box sx={{ flexGrow: 1 }}>
                                    <IconButton href='#id1' sx={{ p: 0 }}>
                                        <Image
                                            src={logo}
                                            alt={'logo'}
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: '50%' }}
                                        />
                                    </IconButton>
                                </Box>

                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: 'none', md: 'flex' },
                                        justifyContent: 'flex-end',
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
                                                fontSize: '14px',
                                                display: 'block',
                                            }}
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
                                                <Button href={page.id}>
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
