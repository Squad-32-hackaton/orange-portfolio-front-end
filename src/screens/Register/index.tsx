import {
  Box,
  Button,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import LoginImage from '../../assets/img/img-tela-cadastro.png';
import {
  BoxStyles,
  CardMediaStyles,
  ContainerStyles,
  GridStyles,
  StyleBrButton,
  TypographyTitleStyles,
  textFieldBrOne,
  textFieldBrTwo,
} from './styles';

const RegisterPage: React.FC = () => {
  const handleLogin = () => {
  };

  return (
    <>
      <CssBaseline />
      <Container
        component="main"
        sx={ContainerStyles}
      >
        <Box
          sx={BoxStyles}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} display={{ xs: 'none', sm: 'block' }}>
              <CardMedia
                component="img"
                alt="Login Image"
                height="100%"
                image={LoginImage}
                sx={CardMediaStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h3"
                component="h1"
                sx={TypographyTitleStyles}
              >
                Cadastre-se
              </Typography>

              <Grid
                item
                xs={12}
                sm={12}
                sx={GridStyles}
              >

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >

                  <StyleBrButton>
                    <TextField sx={textFieldBrOne}
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Nome"
                      name="name"
                      autoComplete="name"
                      autoFocus
                    />
                    <TextField sx={textFieldBrTwo}
                      margin="normal"
                      required
                      fullWidth
                      name="lastName"
                      label="Sobrenome"
                      id="lastName"
                      autoComplete="lastName"
                    />
                  </StyleBrButton>


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
                    aria-label='Botão Entrar'
                  >
                    Cadastrar
                  </Button>
                </form>

              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;