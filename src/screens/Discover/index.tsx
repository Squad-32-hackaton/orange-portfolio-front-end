import { container, title, inputContainer, textField } from './styles'
import CardProject from '../../components/CardProject'
import { Box, Grid, TextField, Typography } from '@mui/material'

export default function Discover() {
  return (
    <Box sx={container}>
      <Typography sx={title}>
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </Typography>

      <Box sx={inputContainer}>
        <TextField label="Buscar tags" sx={textField} />
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={4}
        sx={{ padding: '32px' }}
      >
        <Grid item xs={4}>
          <CardProject />
        </Grid>
        <Grid item xs={4}>
          <CardProject />
        </Grid>
        <Grid item xs={4}>
          <CardProject />
        </Grid>
        <Grid item xs={4}>
          <CardProject />
        </Grid>
      </Grid>
    </Box>
  )
}
