import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { theme } from './styles/theme'
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectsContextProvider } from './contexts/ProjectsContext'

export default function App() {
  return (
    <ProjectsContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </ProjectsContextProvider>
  )
}
