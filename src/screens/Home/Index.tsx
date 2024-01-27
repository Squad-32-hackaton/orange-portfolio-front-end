import Header from '../../components/Header'
import { Container,InputContainer, UploaderContainer } from './styles'
import Profile from '../../components/Profile'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ProjectModal from '../../components/ProjectModal';
import UploaderImage from '../../components/UploaderImage';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleCreateANewProject() {
    setOpenModal(!openModal)
  }

  return (
   <Container >
    <Modal children={<ProjectModal handleClose={handleCreateANewProject}/>} open={openModal} />

      <Header />
      <Profile handleCreateANewProject={handleCreateANewProject} />

      <InputContainer>

        <Typography
          sx={{ opacity: '0.6', paddingLeft: '1.3rem' }}>
          Adicione seu primeiro projeto
        </Typography>

        <Typography
          align='left'
          sx={{
          color:'#0B0C0D',
          margin:'0 1.5rem', 
          fontSize:'1.25rem', 
          fontWeight:'800', 
          lineHeight:'1.25rem'}} 
          variant='h2'
          >
          Meus projetos
        </Typography>
        <TextField 
          label='Buscar tags'
          sx={{margin:'0 1.5rem'}} 
          size='medium'/>
      </InputContainer>
      
      <UploaderContainer>
      
        <UploaderImage 
          texts={[
          {content: 'Adicione seu primeiro projeto',type:'title'},
          {content: 'compartilhe seu talento com milhares de pessoas',type:'subTitle'}
        ]}/>
      </UploaderContainer>
   </Container>

  )
}
