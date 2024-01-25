import {  Stack } from '@mui/material'
import { Container, Image, } from './styles'
import { FaBars } from "react-icons/fa";
import Logo from '../../assets/Logo.png'
import { FaBell } from "react-icons/fa6";

export default function Header() {
  return (
   <Container>
      <Stack ml={2} direction='row' justifyContent='space-between' alignItems='center'
      spacing={2}>
       <FaBars size={20} />
       <Image src={Logo}/>
      </Stack>
      <Stack mr={2} direction='row' alignItems='center'>
        
        <FaBell size={20}/>
      </Stack>
   </Container>
  )
}
