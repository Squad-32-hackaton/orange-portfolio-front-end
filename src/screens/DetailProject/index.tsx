import { Container, Title } from './styles'
import CardProject from '../../components/CardProject'
import Detail from '../../components/Detail'
import { useParams } from 'react-router-dom'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { useContext, useEffect, useState } from 'react'

export default function DetailProject() {
  const { id } = useParams()
  const { projects } = useContext(ProjectsContext)

  return (
    <Container>
      <Title></Title>

      <CardProject name="" avatar="" />

      <Detail />
    </Container>
  )
}
