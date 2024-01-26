import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { theme } from './styles/theme';
import Home from './screens/Home/Index';
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
