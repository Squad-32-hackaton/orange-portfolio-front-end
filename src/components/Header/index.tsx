import {  AppBar, Box, Drawer,  List,  ListItem,  ListItemText,  Slide,  Stack,  Toolbar } from '@mui/material'
import { container, Image, listContainer } from './styles'
import Logo from '../../assets/img/Logo.png'
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar'
import ProfilePhoto from '../../assets/img/ProfileImage.png'
import { useState } from 'react';
import { menuIconButton } from '../../screens/Home/styles';

export default function Header() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  function toggleDrawer () {   
    setDrawerOpen(!drawerOpen);
  }

  return (
    <Box style={{width: '100%'}}>
      <AppBar position='relative'  >
        <Box sx={container}>
          <Toolbar sx={{ 
            width:'100%', 
            display:'flex', 
            justifyContent:'space-between'}}
          >
          <Stack direction='row' alignItems='center'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() =>  toggleDrawer()}
                sx={menuIconButton}
              >
                <MenuIcon />
              </IconButton>

              <Image src={Logo}/>
 
              <List sx={listContainer}>
                <ListItem >
                  <ListItemText primary="Meus projetos" />
                </ListItem>
                <ListItem >
                  <ListItemText primary="Descobrir" />
                </ListItem>
              </List>
          </Stack>    

          <Stack direction='row' alignItems='center' gap={2}>
              <Avatar src={ProfilePhoto}/>
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

    <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => toggleDrawer()}
        
      >
        <Slide>
          <List>
            <ListItem >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Sobre" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Contato" />
            </ListItem>
          </List>
        </Slide>
      </Drawer>
  </Box>
  )
}