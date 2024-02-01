import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODE5ODY2LCJleHAiOjE3MDY4MjM0NjZ9.K_hgDl0IqGciYK_CzSf84IfX8CNjn3nygdHnuzpTRgg'

const axiosConfig = axios.create({
  baseURL: 'https://orangeportfoliosquad32.software',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'aplication/json',
  },
})

export async function getProjectsUserService() {
  try {
    const teste = await axiosConfig.get('/users/1/projects')
    console.log(teste.data)
  } catch (error) {
    throw new Error('houve um erro durante a requisição:' + error)
  }
}

export async function createNewProjectService(data: any) {
  try {
    const teste = await axiosConfig.post('/users/1/projects', { data })
    console.log(teste.data)
  } catch (error) {
    throw new Error('houve um erro durante a requisição:' + error)
  }
}
