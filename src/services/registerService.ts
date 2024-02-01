import axios, { AxiosResponse } from 'axios'

interface UserRegistrationData {
  first_name: string
  last_name: string
  email: string
  avatar: string
  password: string
}

const userService = {
  registerUser: async (
    userData: UserRegistrationData,
  ): Promise<AxiosResponse | { status: number; data: { error: string } }> => {
    try {
      const response = await axios.post(
        'https://orangeportfoliosquad32.software/user',
        userData,
      )

      return {
        status: response.status,
        data: { error: 'Cadastro bem-sucedido' },
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500
        return { status, data: { error: 'Erro no cadastro de usuário' } }
      }
      return { status: 500, data: { error: 'Erro desconhecido' } }
    }
  },
}

export default userService
