import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { theme } from './styles/theme'
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}
