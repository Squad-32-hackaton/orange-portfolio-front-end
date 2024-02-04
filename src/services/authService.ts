import axios, { AxiosResponse } from 'axios'

interface LoginData {
  email: string
  password: string
}

const authService = {
  login: async (
    loginData: LoginData,
  ): Promise<AxiosResponse | { status: number; data: { error: string } }> => {
    try {
      const response = await axios.post(
        'https://orangeportfoliosquad32.software/login',
        loginData,
      )
      sessionStorage.setItem('token', response.data)

      return { status: response.status, data: { error: 'Login bem-sucedido' } }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500
        return { status, data: { error: 'Credenciais inválidas' } }
      }
      return { status: 500, data: { error: 'Erro desconhecido' } }
    }
  },
  logout: (): Promise<{ status: number; data: { message: string } }> => {
    sessionStorage.removeItem('token')

    return Promise.resolve({
      status: 200,
      data: { message: 'Logout bem-sucedido' },
    })
  },

  isAuthenticated: (): boolean => {
    const token = sessionStorage.getItem('token')
    return !!token
  },
}

export default authService
