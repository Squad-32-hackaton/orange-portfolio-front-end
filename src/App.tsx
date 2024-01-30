import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { theme } from './styles/theme'
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { useEffect, useState } from 'react';
import Home from './screens/Home/Index';
import LoginPage from './screens/Auth';
import authService from './services/authService';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsAuthenticated(authService.isAuthenticated());
    };

    checkAuthentication();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      
        { isAuthenticated ? <Home /> : <LoginPage /> }
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App