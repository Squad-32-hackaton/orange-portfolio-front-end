import { Box, Button, CardMedia, TextField, Typography } from '@mui/material'
import LoginImage from '../../assets/img/RegisterImage.png'
import {
  baseStyle,
  boxGoogle,
  boxInputs,
  cardMediaStyles,
  styleBrButton,
  textFieldBrOne,
  textFieldBrTwo,
  typographyTitleStyles,
} from './styles'
import registerService from '../../services/registerService'
import { useState } from 'react'

export default function RegisterPage() {
  const [errors, setErrors] = useState()

  const handleRegister = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    try {
      const response = await registerService.registerUser({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      })

      if (response.status === 200) {
        console.log('Login bem-sucedido')
      } else {
        setErrors(response.data.error || 'Falha no registro.')
      }
    } catch (error) {
      console.error('Erro ao fazer registro:', error)
    }
  }

  return (
    <Box sx={baseStyle}>
      <Box sx={boxGoogle}>
        <CardMedia component="img" image={LoginImage} sx={cardMediaStyles} />

        <Box sx={boxInputs}>
          <Typography variant="h3" component="h1" sx={typographyTitleStyles}>
            Cadastre-se
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const firstName = e.currentTarget.firstName.value
              const lastName = e.currentTarget.lastName.value
              const email = e.currentTarget.email.value
              const password = e.currentTarget.password.value
              handleRegister(firstName, lastName, email, password)
            }}
          >
            <Box sx={styleBrButton}>
              <TextField
                sx={textFieldBrOne}
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Nome"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                error={Boolean(errors)}
                helperText={errors}
              />
              <TextField
                sx={textFieldBrTwo}
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Sobrenome"
                id="lastName"
                autoComplete="lastName"
                error={Boolean(errors)}
                helperText={errors}
              />
            </Box>

            <Box />

            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email address"
              type="email"
              id="email"
              autoComplete="email"
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
              error={Boolean(errors)}
              helperText={errors}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 1, backgroundColor: '#FF5522' }}
              aria-label="Botão Cadastrar"
            >
              Cadastrar
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
