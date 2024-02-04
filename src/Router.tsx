import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import DetailProject from './screens/DetailProject'
import Home from './screens/Home'
import LoginPage from './screens/Auth'
import RegisterPage from './screens/Register'
import Discover from './screens/Discover'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './contexts/AuthContext'

export function Router() {
  const { isAuthenticated, checkAuthentication } = useContext(AuthContext)

  useEffect(() => {
    checkAuthentication()
  }, [isAuthenticated])

  
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout isAuthenticated={isAuthenticated} />}
      >
        <Route path="/" element={isAuthenticated ? <Home /> : <LoginPage />} />
        <Route path="/my-portfolio" element={<Discover />} />
        <Route path="/detail-project">
          <Route path=":id" element={<DetailProject />} />
        </Route>
        <Route path="/register-user" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}
