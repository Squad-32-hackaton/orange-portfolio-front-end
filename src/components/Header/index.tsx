import {  AppBar,  Stack,  Toolbar } from '@mui/material'
import { Container, Image } from './styles'
import Logo from '../../assets/Logo.png'
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar'
import ProfilePhoto from '../../assets/ProfileImage.png'

export default function Header() {
  return (
    <AppBar position='static' >
      <Container>
        <Toolbar sx={{width:'100%', display:'flex', justifyContent:'space-between'}}>
        <Stack direction='row' alignItems='center'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              
            >
              <MenuIcon />
            </IconButton>
          <Image src={Logo}/>
        </Stack>

      <Stack direction='row' alignItems='center' gap={2}>
        <Avatar src={ProfilePhoto}/>
        <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NotificationsIcon />
            </IconButton>
      </Stack>             
    </Toolbar>
   </Container>
  </AppBar>    
  )
}