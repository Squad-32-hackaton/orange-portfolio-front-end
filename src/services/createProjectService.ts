import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'https://orangeportfoliosquad32.software',
  headers: {
    Authorization: ``,
  },
})

export async function createProjectService() {
  try {
    const teste = await axios.get('/users/1/projects')
    console.log(teste)
  } catch (error) {
    throw new Error('houve um erro durante a requisição:' + error)
  }
}
