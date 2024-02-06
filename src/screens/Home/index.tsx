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
import { Grid, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useContext, useEffect } from 'react'
import ProjectModal from '../../components/ProjectModal'
import UploaderImage from '../../components/UploaderImage'

import Box from '@mui/material/Box'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import CardProject from '../../components/CardProject'
import ModalSuccess from '../../components/ModalSuccess'
import { ModalContext } from '../../contexts/ModalsContext'
import ModalDeleteProject from '../../components/ModalDeleteProject'

export default function Home() {
  const { projects, getProjectsUserService } = useContext(ProjectsContext)
  const { modalSuccessOpen, openProjectModal, openModalDelete } =
    useContext(ModalContext)

  useEffect(() => {
    getProjectsUserService()
  }, [getProjectsUserService])

  return (
    <Box sx={container}>
      <Modal
        // eslint-disable-next-line react/no-children-prop
        children={
          <div>
            <ModalSuccess />
          </div>
        }
        open={modalSuccessOpen}
      />

      <Modal
        // eslint-disable-next-line react/no-children-prop
        children={
          <div>
            <ModalDeleteProject />
          </div>
        }
        open={openModalDelete}
      />

      <Modal
        // eslint-disable-next-line react/no-children-prop
        children={
          <div>
            <ProjectModal />
          </div>
        }
        open={openProjectModal}
      />
      <Profile />

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

          <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
            spacing={4}
          >
            {projects &&
              projects.map((project) => (
                <Grid item xl={3} xs={12} sm={6} md={4} key={project.project_id}>
                  <CardProject
                    name={project.user.name}
                    avatar=""
                    tags={project.tags}
                    projectId={Number(project.project_id)}
                    image={project.image}
                    creationAt={project.creationDate}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
