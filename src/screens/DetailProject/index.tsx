import { container, title } from './styles'
import CardProject from '../../components/CardProject'
import Detail from '../../components/Detail'
import { useParams } from 'react-router-dom'
import { ProjectsContext, ProjectsDTO } from '../../contexts/ProjectsContext'
import { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'

export default function DetailProject() {
  const { id } = useParams()
  const { projects } = useContext(ProjectsContext)
  const [currentProject, setCurrentProject] = useState<ProjectsDTO>()

  useEffect(() => {
    const project = projects.find((project) => project.project_id === id)
    setCurrentProject(project)
  }, [])

  return (
    <Box sx={container}>
      <Box sx={title}></Box>

      <CardProject
        name={currentProject!.user.name}
        avatar={currentProject!.user.avatar}
        creationAt={currentProject!.creationDate}
        image={currentProject!.image}
        projectId={Number(currentProject!.project_id)}
        tags={currentProject!.tags}
      />

      <Detail />
    </Box>
  )
}
