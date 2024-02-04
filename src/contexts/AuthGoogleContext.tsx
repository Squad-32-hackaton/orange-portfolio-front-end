import axios, { AxiosResponse } from 'axios'

interface GoogleLoginResponse {
  token: string
}

const AuthGoogleContext = {
  loginWithGoogle: async (): Promise<
    | AxiosResponse<GoogleLoginResponse>
    | { status: number; data: { error: string } }
  > => {
    try {
      const response = await axios.get<GoogleLoginResponse>(
        'https://orangeportfoliosquad32.software/auth/google',
      )
      const responseData = response.data
      console.log(response.data)
      const token = responseData.token
      sessionStorage.setItem('token', token)
      return response
    } catch (error) {
      console.error('Erro durante a autenticação com o Google:', error)
      return {
        status: 500,
        data: { error: 'Erro durante a autenticação com o Google' },
      }
    }
  },
}

export default AuthGoogleContext