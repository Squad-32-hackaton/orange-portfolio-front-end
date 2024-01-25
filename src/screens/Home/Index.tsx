import React from 'react'
import Header from '../../components/Header'
import { Container } from './styles'
import Profile from '../../components/Profile'

export default function Home() {
  return (
   <Container >
    <Header/>
    <Profile/>
   </Container>
  )
}
