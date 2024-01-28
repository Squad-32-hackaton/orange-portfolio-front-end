import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { theme } from './styles/theme';
import Home from './screens/Home/Index';
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom';
import DetailProject from './screens/DetailProject/index'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Home />
        <DetailProject/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
