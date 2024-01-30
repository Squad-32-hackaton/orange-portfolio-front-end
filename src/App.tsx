import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { theme } from './styles/theme';
import Home from './screens/Home/Index';
import LoginPage from './screens/Auth';
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom';
import authService from './services/authService';
import RegisterPage from './screens/Register';
// import DetailProject from './screens/DetailProject/index'
// import MyPortfolio from './screens/MyPortfolio';

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
        {/* <Home /> */}
        {/* <DetailProject/> */}
        {/* <MyPortfolio/> */}
        { isAuthenticated ? <Home /> : <LoginPage /> }
        {/* <RegisterPage /> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App