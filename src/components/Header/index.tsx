
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slide,
  Stack,
  Toolbar,
} from '@mui/material'

import { AppBar, Box, Drawer, List, ListItem, Stack, Toolbar } from '@mui/material'
import { appBarContainer, container, Image, listContainer, DivLine, listContainerFull, ListItemButton, list, listItem, toolbar, ListItemButtonModal } from './styles'

import Logo from '../../assets/img/Logo.png'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import ProfilePhoto from '../../assets/img/ProfileImage.png'
import { useState } from 'react'
import { menuIconButton } from '../../screens/Home/styles'
import { Link } from 'react-router-dom'

export default function Header() {
 const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={appBarContainer}>
      <AppBar position="relative">
        <Box sx={container}>
          <Toolbar sx={toolbar}>
            <Stack direction='row' alignItems='center'>
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

              <List sx={listContainer}>
                <ListItem>
                  <Link to={'/my-portfolio'}>
                    <ListItemText primary="Meus projetos" />
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Descobrir" />
                </ListItem>
              </List>
            </Stack>

            <Stack direction="row" alignItems="center" gap={2}>

              <Drawer sx={listContainer} anchor="top" open={drawerOpen} onClose={handleDrawerClose}>
                <List>
                  <ListItem>
                    <ListItemButtonModal>Meus projetos</ListItemButtonModal>
                  </ListItem>
                  <ListItem>
                    <ListItemButtonModal>Descobrir</ListItemButtonModal>
                  </ListItem>
                  <DivLine></DivLine>
                  <ListItem sx={listItem}>
                    <ListItemButtonModal>Configurações</ListItemButtonModal>
                  </ListItem>
                </List>
              </Drawer>

              <List sx={listContainerFull}>
                <List sx={list}>
                  <ListItem>
                    <ListItemButton>Meus projetos</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Descobrir</ListItemButton>
                  </ListItem>
                </List>
              </List>

            </Stack>

            <Stack direction='row' alignItems='center' gap={2}>

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
