import { Image, ImageContainer, ProfileContainer,ProfileText,TextContainer } from './styles'
import ProfileImage from '../../assets/ProfileImage.png'
import Button from '@mui/material/Button';

interface ProfileProps {
  handleCreateANewProject: () => void
}

export default function Profile({ handleCreateANewProject }:ProfileProps) {
  return (
   <ProfileContainer>
     <ImageContainer >
      <Image src={ProfileImage}/>
     </ImageContainer>
     
    <TextContainer>
      <ProfileText>
        <h1>Camila Soares</h1>
        <p>Brasil</p>
      </ProfileText>

      <Button variant='contained' color='inherit' sx={{color:'#00000061', height:'2.625rem'}} onClick={() => handleCreateANewProject()}>ADICIONAR PROJETO</Button>
    </TextContainer>
   </ProfileContainer>

  )
}
