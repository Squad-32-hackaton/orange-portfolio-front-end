import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  Stack,
  Toolbar
} from '@mui/material'

import {
  DivLine,
  Image,
  ListItemButtonHeader,
  ListItemButtonModal,
  appBarContainer,
  container,
  list,
  listContainer,
  listContainerFull,
  listItem,
  toolbar
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

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
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
                  <ListItemButtonHeader><Link to={'/my-portfolio'}>Meus projetos</Link></ListItemButtonHeader>
                  </ListItem>
                  <ListItem>
                  <ListItemButtonHeader><Link to={'/discover'}>Descobrir</Link></ListItemButtonHeader>
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
                    <ListItemButtonModal><Link to={'/my-portfolio'}>Meus projetos</Link></ListItemButtonModal>
                  </ListItem>
                  <ListItem>
                  <ListItemButtonModal><Link to={'/discover'}>Descobrir</Link></ListItemButtonModal>
                  </ListItem>
                  <DivLine></DivLine>
                  <ListItem sx={listItem}>
                  <ListItemButtonModal><Link to={'#'}>Configurações</Link></ListItemButtonModal>
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
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  )
}
