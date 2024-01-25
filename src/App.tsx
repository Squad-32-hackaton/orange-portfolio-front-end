import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { theme } from './styles/theme';
import Home from './screens/Home/Index';



function App() {
  
  return (
    
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
  
  )
}

export default App
