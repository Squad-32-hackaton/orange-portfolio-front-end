import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { theme } from './styles/theme';
import Home from './screens/Home/Index';
import LoginPage from './screens/Auth';
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom';

interface UserData {
  email: string;
}

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* { userData ? <Home /> : <LoginPage /> } */}
         <Home />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
