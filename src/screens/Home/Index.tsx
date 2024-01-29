import Header from '../../components/Header'
import { container,inputContainer, uploaderContainer, homeTextField, homeTextLabel, projectSectionContainer } from './styles'
import Profile from '../../components/Profile'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ProjectModal from '../../components/ProjectModal';
import UploaderImage from '../../components/UploaderImage';

import Box from '@mui/material/Box'




export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleCreateANewProject() {
    setOpenModal(!openModal)
  }

  return (
   <Box sx={container}>


    <Modal 
      children={
        <ProjectModal 
          handleClose={handleCreateANewProject}
        />
      } 
        open={openModal} 
      />

      <Header />
      <Profile handleCreateANewProject={handleCreateANewProject} nameUser='Camila Soares' />

    <Box sx={projectSectionContainer}>


      <Box sx={inputContainer}>
        <Typography
          align='left'
          sx={homeTextLabel}
          variant='h2'
        >
          Meus projetos
        </Typography>
        <TextField
          label='Buscar tags'
          sx={ homeTextField }
          size='medium' 
        />
      </Box>

      <Box sx={uploaderContainer}>


        <UploaderImage 
          texts={[
          {content: 'Adicione seu primeiro projeto',type:'title'},
          {content: 'compartilhe seu talento com milhares de pessoas',type:'subTitle'}
        ]}/>
      </Box>

    </Box>
  </Box>
     

  )
}
