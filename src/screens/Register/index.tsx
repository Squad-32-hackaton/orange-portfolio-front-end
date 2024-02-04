import {
  Box,
  Button,
  CardMedia,
  TextField,
  Typography,
  Snackbar,
  Grow,
} from '@mui/material'
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
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import registerService from '../../services/registerService'
import { useState } from 'react'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function RegisterPage() {
  const [openSnackbarSuccess, setopenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setopenSnackbarError] = useState(false)
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

      if (response.status === 200 || response.status === 201) {
        setopenSnackbarSuccess(true)
      } else {
        setErrors(response.data.error || 'Falha no registro.')
        console.log(response.data)
        console.log(response.data.errors)
        console.log(response.data.error)
        console.log(response)
        setopenSnackbarError(true)
      }
    } catch (error) {
      console.log(error)
      console.error('Erro ao fazer registro:', error)
      setopenSnackbarError(true)
    }
  }

  const handleCloseSnackbarSuccess = () => {
    setopenSnackbarSuccess(false)
  }

  const handleCloseSnackbarError = () => {
    setopenSnackbarError(false)
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
              aria-label="Botão Cadastrar"
            >
              Cadastrar
            </Button>
          </form>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbarSuccess}
        TransitionComponent={Grow}
      >
        <Box>
          <Alert
            onClose={handleCloseSnackbarSuccess}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Cadastro feito com sucesso
          </Alert>
        </Box>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbarError}
        TransitionComponent={Grow}
      >
        <Box>
          <Alert
            onClose={handleCloseSnackbarError}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {errors || 'Erro ao fazer registro!'}
          </Alert>
        </Box>
      </Snackbar>
    </Box>
  )
}
