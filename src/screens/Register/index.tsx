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
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import authService from '../../services/authService'
import { z, ZodError } from 'zod'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const formSchema = z.object({
  firstName: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  lastName: z.string().min(3, 'Sobrenome deve ter pelo menos 3 caracteres'),
  email: z
    .string({
      required_error: 'O campo email é obrigatório.',
    })
    .email("Este não é um 'email' válido")
    .max(50, "O campo 'email' deve conter no máximo 50 caracteres.")
    .trim()
    .toLowerCase(),
  password: z
    .string({
      required_error: "O campo 'senha' é obrigatório.",
    })
    .regex(/(?=.*[a-zA-Z])/, "O campo 'senha' deve conter pelo menos uma letra")
    .regex(/(?=.*[0-9])/, "O campo 'senha' deve conter pelo menos um número")
    .regex(/[0-9a-zA-Z@#$%^&+=!]/)
    .min(8, "O campo 'senha' deve conter pelo menos 8 dígitos")
    .max(50, "O campo 'senha' deve conter no máximo 50 dígitos"),
})

export default function RegisterPage() {
  const [openSnackbarSuccess, setopenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setopenSnackbarError] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { checkAuthentication } = useContext(AuthContext)

  const handleLogin = async (email: string, password: string) => {
    await authService.login({ email, password })
  }

  const handleRegister = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    try {
      const parsedData = await formSchema.parseAsync({
        firstName,
        lastName,
        email,
        password,
      })

      const response = await registerService.registerUser({
        first_name: parsedData.firstName,
        last_name: parsedData.lastName,
        email: parsedData.email,
        password: parsedData.password,
      })

      if (response.status === 200 || response.status === 201) {
        setopenSnackbarSuccess(true)
        setTimeout(() => {
          handleLogin(email, password)
        }, 6000)
        checkAuthentication()
      } else {
        setopenSnackbarError(true)
      }
    } catch (error: any) {
      if (error instanceof ZodError) {
        const zodErrors: Record<string, string> = {}
        error.errors.forEach((validationError) => {
          const path = validationError.path.join('.')
          zodErrors[path] = validationError.message
        })

        setErrors(zodErrors)
        setopenSnackbarError(true)
      } else {
        setErrors(error.data?.errors || error.data || 'Erro ao fazer registro!')
        setopenSnackbarError(true)
      }
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
                type="text"
                inputProps={{
                  pattern: '[A-Za-zÀ-ÖØ-öø-ÿ ]+',
                  title: 'Digite apenas letras no campo Nome.',
                }}
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Nome"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                error={Boolean(errors?.firstName)}
                helperText={
                  <Typography variant="body2">{errors?.firstName}</Typography>
                }
              />
              <TextField
                sx={textFieldBrTwo}
                type="text"
                inputProps={{
                  pattern: '[A-Za-zÀ-ÖØ-öø-ÿ ]+',
                  title: 'Digite apenas letras no campo Sobrenome.',
                }}
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Sobrenome"
                id="lastName"
                autoComplete="lastName"
                error={Boolean(errors?.lastName)}
                helperText={
                  <Typography variant="body2">{errors?.lastName}</Typography>
                }
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
              error={Boolean(errors?.email)}
              helperText={
                <Typography variant="body2">{errors?.email}</Typography>
              }
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
              error={Boolean(errors?.password)}
              helperText={errors?.password}
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
            {Object.keys(errors).length > 0
              ? Object.values(errors).map((errorMessage, index) => (
                  <div key={index}>{errorMessage}</div>
                ))
              : 'Erro ao fazer registro!'}
          </Alert>
        </Box>
      </Snackbar>
    </Box>
  )
}
