import { container, title, inputContainer, textField, divCards } from './styles'
import CardProject from '../../components/CardProject'
import { Box, TextField, Typography } from '@mui/material'

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

      <Box sx={divCards}>
        <CardProject />

        <CardProject />

        <CardProject />

        <CardProject />

        <CardProject />
      </Box>
    </Box>
  )
}
