import {
  Box,
  Button,
  CardMedia,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import LoginImage from '../../assets/img/img-tela-cadastro.png';
import {
  baseStyle,
  boxGoogle,
  boxInputs,
  cardMediaStyles,
  styleBrButton,
  textFieldBrOne,
  textFieldBrTwo,
  typographyTitleStyles
} from './styles';

const RegisterPage: React.FC = () => {
  const handleLogin = () => {
  };

  return (
    <Box sx={baseStyle}>
      <Box sx={boxGoogle}>

      <CardMedia
        component="img"
        image={LoginImage}
        sx={cardMediaStyles} />

      <Box sx={boxInputs}>

      <Typography
          variant="h3"
          component="h1"
          sx={typographyTitleStyles}
        >
          Cadastre-se
        </Typography>

        <Box sx={styleBrButton}>
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
          aria-label='Botão Entrar'
        >
          Entrar
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;