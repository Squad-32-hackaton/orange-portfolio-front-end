import { createContext, useEffect, useState } from 'react'
import authService from '../services/authService'
import { api } from '../services/api'

interface UserProps {
  user_id: number
  avatar: string
  email: string
  first_name: string
  last_name: string
}

interface AuthContextPropsData {
  isAuthenticated: boolean
  user: UserProps
  checkAuthentication: () => void
}
export const AuthContext = createContext({} as AuthContextPropsData)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function getUserData() {
    try {
      await api.get('/login/profile').then((res) => setUser(res.data))
    } catch (error) {
      throw new Error('Houve um erro durante a requisição:' + error)
    }
  }

  function checkAuthentication() {
    const res = authService.isAuthenticated()
    if (!res) {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
      getUserData()
    }
  }

  useEffect(() => {
    checkAuthentication()
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, checkAuthentication, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
