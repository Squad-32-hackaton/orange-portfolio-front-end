import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import MyPortfolio from './screens/MyPortfolio'
import { DefaultLayout } from './layouts/DefaultLayout'
import DetailProject from './screens/DetailProject'
import authService from './services/authService'
import { useEffect, useState } from 'react'
import LoginPage from './screens/Auth'

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
      </Route>
    </Routes>
  )
}
