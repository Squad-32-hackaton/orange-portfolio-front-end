import Header from '../../components/Header'
import { Container,InputContainer, ProjectsContainer } from './styles'
import Profile from '../../components/Profile'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Collections from '@mui/icons-material/Collections'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ProjectModal from '../../components/ProjectModal';


export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  function handleCreateANewProject(){
    setOpenModal(!openModal)
  }


  return (
   <Container >
    <Modal children={<ProjectModal/>} open={openModal}/>

    <Header/>
    <Profile handleCreateANewProject={handleCreateANewProject}/>

    <InputContainer>

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

    <ProjectsContainer>
        <Collections sx={{width: '2.8rem', height:'2.8rem', m:"0 auto"}}/>

        <Typography
          sx={{opacity:'0.6', paddingLeft:'1.3rem'}}>
          Adicione seu primeiro projeto
        </Typography>

        <Typography 
          align='left'
          sx={{opacity:'0.6', paddingLeft:'1.3rem'}} 
        >
          Compartilhe seu talento com milhares de pessoas
        </Typography>
    </ProjectsContainer>
   </Container>
  )
}
