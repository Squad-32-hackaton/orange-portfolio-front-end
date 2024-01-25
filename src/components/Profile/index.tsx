import React from 'react'
import { Image, ImageContainer, ProfileContainer,ProfileText } from './styles'
import ProfileImage from '../../assets/ProfileImage.png'
import Button from '@mui/material/Button';


export default function Profile() {
  return (
   <ProfileContainer>
     <ImageContainer >
      <Image src={ProfileImage}/>
     </ImageContainer>
     
     <ProfileText>
      <h1>Camila Soares</h1>
      <p>Brasil</p>
     </ProfileText>

     <Button variant='contained' color='inherit' size='large' sx={{color:'#ababab', fontFamily:'roboto'}}>ADICIONAR PROJETO</Button>
   </ProfileContainer>

  )
}
