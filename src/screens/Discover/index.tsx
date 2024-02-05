import { useContext, useEffect } from 'react'
import {
  container,
  title,
  inputContainer,
  textField,
  boxInputs,
} from './styles'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import CardProject from '../../components/CardProject'
import { Link } from 'react-router-dom'

export default function Discover() {
  const { discorverProjects, getOthersUserProjectsService } =
    useContext(ProjectsContext)

  useEffect(() => {
    getOthersUserProjectsService()
  }, [])

  return (
    <Box sx={container}>
      <Typography sx={title}>
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </Typography>
      <Box sx={boxInputs}>
        <Box sx={inputContainer}>
          <TextField label="Buscar tags" sx={textField} />
        </Box>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={4}
        sx={{ padding: '32px' }}
      >
        {discorverProjects &&
          discorverProjects.map((project) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={project.project_id}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/detail-project/${project.project_id}`}
                >
                  <CardProject
                    name={project.user.name}
                    avatar=""
                    tags={project.tags}
                    projectId={Number(project.project_id)}
                    image={project.image}
                  />
                </Link>
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}
