import {
  container,
  inputContainer,
  uploaderContainer,
  homeTextField,
  homeTextLabel,
  projectSectionContainer,
} from './styles'
import Profile from '../../components/Profile'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useContext, useEffect, useState } from 'react'
import ProjectModal from '../../components/ProjectModal'
import UploaderImage from '../../components/UploaderImage'

import Box from '@mui/material/Box'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import CardProject from '../../components/CardProject'

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { projects, getProjectsUserService } = useContext(ProjectsContext)

  function handleCreateANewProject() {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    getProjectsUserService()
  }, [])

  return (
    <Box sx={container}>
      <Modal
        // eslint-disable-next-line react/no-children-prop
        children={
          <div>
            <ProjectModal handleClose={handleCreateANewProject} />
          </div>
        }
        open={openModal}
      />
      <Profile handleCreateANewProject={handleCreateANewProject} />

      <Box sx={projectSectionContainer}>
        <Box sx={inputContainer}>
          <Typography align="left" sx={homeTextLabel} variant="h2">
            Meus projetos
          </Typography>
          <TextField label="Buscar tags" sx={homeTextField} size="medium" />
        </Box>

        <Box sx={uploaderContainer}>
          {!projects && (
            <UploaderImage
              texts={[
                { content: 'Adicione seu primeiro projeto', type: 'title' },
                {
                  content: 'compartilhe seu talento com milhares de pessoas',
                  type: 'subTitle',
                },
              ]}
            />
          )}

          {projects &&
            projects.map((item) => <CardProject key={item.project_id} />)}
        </Box>
      </Box>
    </Box>
  )
}
