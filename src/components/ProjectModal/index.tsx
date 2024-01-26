import {  Typography } from "@mui/material";
import { ModalContainer, Container } from "./styles";
import TextField from '@mui/material/TextField';



export default function ProjectModal() {
  return (
    <Container>
      <ModalContainer>

        <Typography
          sx={{ 
           color: '#515255',
           fontSize:'1.5rem' }}
          > Adicionar projeto 
        </Typography>
        
        <TextField 
        placeholder="Titulo"
        />
        <TextField 
        placeholder="Tags"
        
        />
        <TextField 
          placeholder="Descrição"
          multiline
          minRows={3}
        />

        <Typography variant="body1"  sx={{color: '#515255',letterSpacing:'0.15px',lineHeight: '16px'}}>
          Selecione o conteúdo que você deseja fazer upload
        </Typography>
      </ModalContainer>   
    </Container>
   
  )
}
