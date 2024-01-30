import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

interface RouteProps {
  isAuthenticated: boolean
}
export function DefaultLayout({ isAuthenticated }: RouteProps) {
  return (
    <div>
      {isAuthenticated && <Header />}
      <Outlet />
    </div>
  )
}
