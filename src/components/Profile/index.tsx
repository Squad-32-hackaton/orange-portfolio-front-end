import { buttonProfile, country, image,imageContainer, profileContainer,profileText,textContainer, userName } from './styles'
import ProfileImage from '../../assets/img/ProfileImage.png'
import Button from '@mui/material/Button';
import { Avatar, Box, Typography } from '@mui/material';

interface ProfileProps { 
  handleCreateANewProject: () => void
  nameUser: string
}

export default function Profile({ handleCreateANewProject, nameUser }:ProfileProps) {
  return (
  <Box sx={profileContainer}>
    <Box sx={imageContainer} >

     <Avatar
      alt="Login Image"
      src={ProfileImage} 
      sx={image} 
      />

    </Box>
     
    <Box sx={textContainer}>

      <Box sx={profileText}>

        <Typography sx={userName} variant='h1'>{nameUser}</Typography>
        <Typography sx={country}>Brasil</Typography>

      </Box>


      
      <Button 
        variant='contained' 
        color='inherit' 
        size='large' 
        sx={buttonProfile} 
        onClick={() => handleCreateANewProject()}>
          ADICIONAR PROJETO
      </Button>

    </Box>
  </Box>

  )
}
