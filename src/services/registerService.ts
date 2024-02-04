import axios, { AxiosResponse } from 'axios'

interface UserRegistrationData {
  first_name: string
  last_name: string
  email: string
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

      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500 || 400
        return {
          status,
          data: {
            error: error.response?.data.errors,
          },
        }
      }
      return { status: 500, data: { error: 'Erro desconhecido' } }
    }
  },
}

export default userService
