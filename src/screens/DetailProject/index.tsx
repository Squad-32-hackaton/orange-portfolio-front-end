import { container, title } from './styles'
import CardProject from '../../components/CardProject'
import Detail from '../../components/Detail'
import { useParams } from 'react-router-dom'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'

export default function DetailProject() {
  const { id } = useParams()
  const { projects } = useContext(ProjectsContext)

  return (
    <Box sx={container}>
      <Box sx={title}></Box>

      <CardProject name="" avatar="" />

      <Detail />
    </Box>
  )
}
