import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { theme } from './styles/theme'
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectsContextProvider } from './contexts/ProjectsContext'
import { ModalContextProvider } from './contexts/ModalsContext'

export default function App() {
  return (
    <AuthProvider>
      <ProjectsContextProvider>
        <ModalContextProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Router />
            </ThemeProvider>
          </BrowserRouter>
        </ModalContextProvider>
      </ProjectsContextProvider>
    </AuthProvider>
  )
}
