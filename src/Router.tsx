import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import DetailProject from './screens/DetailProject'
import authService from './services/authService'
import { useEffect, useState } from 'react'
import Home from './screens/Home/Index'
import LoginPage from './screens/Auth'
import RegisterPage from './screens/Register'
import MyPortfolio from './screens/MyPortfolio'

export function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsAuthenticated(authService.isAuthenticated())
    }

    checkAuthentication()
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout isAuthenticated={isAuthenticated} />}
      >
        <Route path="/" element={isAuthenticated ? <Home /> : <LoginPage />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/detail-project" element={<DetailProject />} />
        <Route path="/register-user" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}
