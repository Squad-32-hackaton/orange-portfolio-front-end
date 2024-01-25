import {  Typography } from "@mui/material";
import { ModalContainer } from "./styles";
import Input from '@mui/material/Input';


export default function ProjectModal() {
  return (
   <ModalContainer>
    <Typography
    sx={{color: '#515255', fontSize:'1.5rem'}}
    > Adicionar projeto </Typography>
    <Input 
     placeholder="Titulo"
    />
    <Input 
     placeholder="Tags"
    />
    <Input 
     placeholder="Descrição"
    />
   </ModalContainer>
  )
}
