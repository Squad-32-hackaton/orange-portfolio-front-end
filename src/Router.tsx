import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import DetailProject from './screens/DetailProject'
import authService from './services/authService'
import { useEffect, useState } from 'react'
import Home from './screens/Home'
import LoginPage from './screens/Auth'
import RegisterPage from './screens/Register'
import MyPortfolio from './screens/MyPortfolio'
import Discover from './screens/Discover'

export function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     return setIsAuthenticated(authService.isAuthenticated())
  //   }

  //   checkAuthentication()
  //   console.log(checkAuthentication())
  // }, [isAuthenticated])

  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout isAuthenticated={isAuthenticated} />}
      >
        <Route path="/" element={isAuthenticated ? <Home /> : <LoginPage />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/detail-project" element={<DetailProject />} />
        <Route path="/register-user" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}
