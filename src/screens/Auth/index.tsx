import {
  Box,
  Button,
  CardMedia,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import LogoGoogle from '../../assets/img/logo googleg 48dp.png'
import LoginImage from '../../assets/img/LoginImage.png'
import {
  baseStyle,
  cardMediaStyles,
  IconButtonStyles,
  typographyTitleStyles,
  boxGoogle,
  boxInputs,
  LinkStyles,
} from './styles'
import IconButton from '../../components/IconButton'
import authService from '../../services/authService'

export default function LoginPage() {
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password })

      if (response.status === 200) {
        console.log('Login bem-sucedido')
      } else {
        console.error(response.data.error)
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  return (
    <Box sx={baseStyle}>
      <CardMedia component="img" image={LoginImage} sx={cardMediaStyles} />

      <Box sx={boxInputs}>
        <Box sx={boxGoogle}>
          <Typography variant="h3" component="h1" sx={typographyTitleStyles}>
            Entre no Orange Portfolio
          </Typography>

          <IconButton
            title={'Entrar com Google'}
            icon={<img src={LogoGoogle} alt="Google Logo" />}
            onClick={() => {
              // Lógica para entrar com o Google
            }}
            sx={IconButtonStyles}
            aria-label="Botão Entrar com Google"
          />
        </Box>

        <Typography component="h2" variant="h6">
          Faça login com email
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const email = e.currentTarget.email.value
            const password = e.currentTarget.password.value
            handleLogin(email, password)
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email address"
            type="email"
            id="email"
            autoComplete="email"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 1, backgroundColor: '#FF5522' }}
            aria-label="Botão Entrar"
          >
            Entrar
          </Button>
        </form>
        <Link
          component={RouterLink}
          to="/register-user"
          variant="body2"
          sx={LinkStyles}
        >
          Cadastre-se
        </Link>
      </Box>
    </Box>
  )
}
