import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  Stack,
  Toolbar,
} from '@mui/material'

import {
  divLine,
  Image,
  listItemButtonHeader,
  listItemButtonModal,
  appBarContainer,
  container,
  list,
  listContainer,
  listContainerFull,
  listItem,
  toolbar,
} from './styles'

import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import ProfilePhoto from '../../assets/img/ProfileImage.png'
import { menuIconButton } from '../../screens/Home/styles'
import LogoutIcon from '@mui/icons-material/Logout'
import authService from '../../services/authService'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleLogout = async () => {
    await authService.logout()
    window.location.href = '/'
  }

  return (
    <Box sx={appBarContainer}>
      <AppBar position="relative">
        <Box sx={container}>
          <Toolbar sx={toolbar}>
            <Stack direction="row" alignItems="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => handleDrawerOpen()}
                sx={menuIconButton}
              >
                <MenuIcon />
              </IconButton>

              <Link to="/">
                <Image src={Logo} />
              </Link>

              <List sx={listContainerFull}>
                <List sx={list}>
                  <ListItem>
                    <Box sx={listItemButtonHeader}>
                      <Link to={'/'}>Meus projetos</Link>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box sx={listItemButtonHeader}>
                      <Link to={'/my-portfolio'}>Descobrir</Link>
                    </Box>
                  </ListItem>
                </List>
              </List>
            </Stack>

            <Stack direction="row" alignItems="center" gap={2}>
              <Drawer
                sx={listContainer}
                anchor="top"
                open={drawerOpen}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItem>
                    <Box sx={listItemButtonModal}>
                      <Link to={'/'}>Meus projetos</Link>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box sx={listItemButtonModal}>
                      <Link to={'/my-portfolio'}>Descobrir</Link>
                    </Box>
                  </ListItem>
                  <Box sx={divLine}></Box>
                  <ListItem sx={listItem}>
                    <Box sx={listItemButtonModal}>
                      <Link to={'#'}>Configurações</Link>
                    </Box>
                  </ListItem>
                </List>
              </Drawer>
            </Stack>

            <Stack direction="row" alignItems="center" gap={2}>
              <Avatar src={ProfilePhoto} />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="notifications"
                sx={{ mr: 2 }}
              >
                <NotificationsIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="notifications"
                sx={{ mr: 2 }}
                onClick={handleLogout}
              >
                <LogoutIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  )
}
