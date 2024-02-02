import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODcyNTgzLCJleHAiOjE3MDY4NzYxODN9.t-uWgdfSXB5UEyyA_GPGglECll-cqX08aDEIvp32u0c'

const axiosConfig = axios.create({
  baseURL: 'https://orangeportfoliosquad32.software',
  headers: {
    Authorization: `Bearer ${token}`,
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
    const teste = await axiosConfig
      .post('/users/1/projects', data)
      .then((res) => console.log(res))
  } catch (error) {
    throw new Error('houve um erro durante a requisição:' + error)
  }
}
