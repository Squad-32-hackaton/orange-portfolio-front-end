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
  centerGoogle,
} from './styles'
import IconButton from '../../components/IconButton'
import authService from '../../services/authService'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AuthGoogleContext from '../../contexts/AuthGoogleContext'

export default function LoginPage() {
  const { checkAuthentication } = useContext(AuthContext)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState()

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password })

      if (response.status === 200) {
        checkAuthentication()
      } else {
        setErrors(response.data.error || 'Falha na autenticação.')
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await AuthGoogleContext.loginWithGoogle()
      checkAuthentication()
    } catch (error) {
      console.error('Erro ao fazer login com o Google:', error)
    }
  }

  return (
    <Box sx={baseStyle}>
      <CardMedia component="img" image={LoginImage} sx={cardMediaStyles} />

      <Box sx={boxInputs}>
        <Box sx={boxGoogle}>
          <Box sx={centerGoogle}>
            <Typography variant="h3" component="h1" sx={typographyTitleStyles}>
              Entre no Orange Portfolio
            </Typography>

            <IconButton
              title={'Entrar com Google'}
              icon={<img src={LogoGoogle} alt="Google Logo" />}
              onClick={handleGoogleLogin}
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
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={Boolean(errors)}
              helperText={errors}
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={Boolean(errors)}
              helperText={errors}
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
    </Box>
  )
}
