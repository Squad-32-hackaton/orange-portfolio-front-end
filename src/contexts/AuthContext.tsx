import { createContext, useState } from 'react'
import authService from '../services/authService'

interface AuthContextPropsData {
  isAuthenticated: boolean
  checkAuthentication: () => void
}

export const AuthContext = createContext({} as AuthContextPropsData)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  function checkAuthentication() {
    const res = authService.isAuthenticated()
    if (!res) {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
    }
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuthentication }}>
      {children}
    </AuthContext.Provider>
  )
}
