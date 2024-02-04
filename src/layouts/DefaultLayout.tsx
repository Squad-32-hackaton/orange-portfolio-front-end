import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Box } from '@mui/material'

const containerStyle = { height: '100%', background: '#fff' }
interface RouteProps {
  isAuthenticated: boolean
}
export function DefaultLayout({ isAuthenticated }: RouteProps) {
  return (
    <Box sx={containerStyle}>
      {isAuthenticated && <Header />}
      <Outlet />
    </Box>
  )
}
