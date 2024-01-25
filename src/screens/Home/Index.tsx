import React from 'react'
import Header from '../../components/Header'
import { Container,InputContainer } from './styles'
import Profile from '../../components/Profile'
import TextField from '@mui/material/TextField';


export default function Home() {
  return (
   <Container >
    <Header/>
    <Profile/>
    <InputContainer>
      <h2>Meus projetos</h2>
      <TextField label='Buscar tags'/>
    </InputContainer>
   </Container>
  )
}
