import { createContext, useContext, useState } from 'react'

import { api } from '../services/api'
import { AuthContext } from './AuthContext'
import { ModalContext } from './ModalsContext'

interface ProjectDetailsProps {
  project_id: string
  creationDate: string
  description: string
  image: string
  link: string
  tags: string[]
  title: string
  user: {
    avatar: string
    name: string
  }
}
export interface ImageDataProps {
  image_id: number
  filename: string
}
export interface ProjectsDTO {
  project_id: string
  user: {
    name: string
    avatar?: string
  }
  link: string
  tags: string[]
  image: ImageDataProps
}

interface ProjectsContextProps {
  currentProjectId: number | undefined
  projects: ProjectsDTO[]
  discorverProjects: ProjectDetailsProps[]
  getProjectsUserService: () => void
  getProjectDetailsService: (
    id: number,
  ) => Promise<ProjectDetailsProps | undefined>
  createNewProjectService: (data: any) => void
  getOthersUserProjectsService: () => Promise<void>
  postImageUserService: (image: any) => Promise<ImageDataProps>
  handleDeleteUserProject: (id: number) => Promise<void>
  handleSetCurrentProject: (projectId: number) => void
}

interface IProviderProps {
  children: React.ReactNode
}

export const ProjectsContext = createContext({} as ProjectsContextProps)

export const ProjectsContextProvider = ({ children }: IProviderProps) => {
  // Projetos do usuário
  const [projects, setProjecs] = useState<ProjectsDTO[]>([])

  // Projetos do Feed
  const [discorverProjects, setDiscorverProject] = useState<
    ProjectDetailsProps[]
  >([])

  // Projeto Selecionado
  const [currentProjectId, setCurrentProjectId] = useState<number>()

  const { user } = useContext(AuthContext)

  function handleSetCurrentProject(projectId: number) {
    console.log('setou', projectId)
    setCurrentProjectId(projectId)
  }

  async function getProjectsUserService() {
    try {
      const res = await api.get('/users/1/projects')
      setProjecs(res.data.projects)
    } catch (error) {
      throw new Error('houve um erro durante a requisição:' + error)
    }
  }

  async function getProjectDetailsService() {
    try {
      const res: ProjectDetailsProps = await api.get(
        `/projects/${user.user_id}`,
      )
      return res
    } catch (error) {
      console.log(error)
    }
  }

  async function createNewProjectService(data: any) {
    try {
      const res = await api.post(`/users/${user.user_id}/projects`, data)
      return res
    } catch (error) {
      throw new Error('houve um erro durante a requisição:' + error)
    }
  }

  async function postImageUserService(image: any) {
    try {
      // const res = await api.post(`/users/${user.user_id}/projects`, data)
      const res = await api.post('/upload', image, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return res.data
    } catch (error) {
      throw new Error('houve um erro durante a requisição:' + error)
    }
  }

  async function getOthersUserProjectsService() {
    try {
      const res = await api.get('/projects')
      setDiscorverProject(res.data.projects)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteUserProject() {
    const userId = user.user_id
    try {
      const res = await api.delete(
        `/users/${userId}/projects/${currentProjectId}`,
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ProjectsContext.Provider
      value={{
        projects,
        getProjectsUserService,
        createNewProjectService,
        getProjectDetailsService,
        getOthersUserProjectsService,
        postImageUserService,
        discorverProjects,
        handleDeleteUserProject,
        currentProjectId,
        handleSetCurrentProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
