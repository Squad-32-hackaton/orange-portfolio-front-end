import { createContext, useState } from 'react'

import { api } from '../services/api'

interface ProjectsDTO {
  project_id: string
  link: string
  tags: string[]
  image: {
    image_id: number
    filename: string
  }
}

interface ProjectsContextProps {
  projects: ProjectsDTO[]
  getProjectsUserService: () => void
  createNewProjectService: (data: any) => void
}

interface IProviderProps {
  children: React.ReactNode
}

export const ProjectsContext = createContext({} as ProjectsContextProps)

export const ProjectsContextProvider = ({ children }: IProviderProps) => {
  const [projects, setProjecs] = useState<ProjectsDTO[]>([])

  async function getProjectsUserService() {
    try {
      const res = await api.get('/users/1/projects')
      setProjecs(res.data)
    } catch (error) {
      throw new Error('houve um erro durante a requisição:' + error)
    }
  }

  async function createNewProjectService(data: any) {
    try {
      const res = await api
        .post('/users/1/projects', data)
        .then((res) => console.log(res))
    } catch (error) {
      throw new Error('houve um erro durante a requisição:' + error)
    }
  }
  return (
    <ProjectsContext.Provider
      value={{ projects, getProjectsUserService, createNewProjectService }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
