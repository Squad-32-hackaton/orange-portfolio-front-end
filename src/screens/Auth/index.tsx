import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  ContainerStyles, 
  BoxStyles, 
  CardMediaStyles, 
  TypographyTitleStyles, 
  IconButtonStyles, 
  GridStyles, 
  LinkStyles 
} from './styles';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  TextField, 
  Link, 
  CardMedia, 
  Grid, 
  CssBaseline } 
from '@mui/material';
import LoginImage from '../../assets/img/LoginImage.png';
import LogoGoogle from '../../assets/img/logo googleg 48dp.png';
import IconButton from '../../components/IconButton';
import authService from '../../services/authService';

const LoginPage: React.FC = () => {
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });

      if (response.status === 200) {
        console.log('Login bem-sucedido');        
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="md"
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
                Entre no Orange Portfolio
              </Typography>

              <IconButton 
                title={'Entrar com Google'} 
                icon={<img src={LogoGoogle} alt="Google Logo" />} 
                onClick={() => {
                  // Lógica para entrar com o Google
                }}
                sx={IconButtonStyles}
                aria-label='Botão Entrar com Google'
              /> 

              <Grid
                item
                xs={12}
                sm={12}
                sx={GridStyles}
              >
                <Typography component="h2" variant="h6">
                  Faça login com email
                </Typography>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.currentTarget.email.value;
                    const password = e.currentTarget.password.value;
                    handleLogin(email, password);
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email address"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                    sx={{ mt: 1 }}
                    aria-label='Botão Entrar'
                  >
                    Entrar
                  </Button>
                </form>

                <Link
                  component={RouterLink}
                  to="/signup"
                  variant="body2"
                  sx={LinkStyles}
                >
                  Cadastre-se
                </Link>

              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;