import { container,title, inputContainer, textField, divCards } from './styles'
import CardProject from '../../components/CardProject'
import { Box, TextField } from '@mui/material'

export default function MyPortfolio() {
  return (
    <Box sx={container}>
      <Box sx={title}>
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </Box>

      <Box sx={inputContainer}>
        <TextField label="Buscar tags" sx={textField} />
      </Box>

      <>
        <Box sx={divCards}>
          <CardProject />

          <CardProject />

          <CardProject />

          <CardProject />

          <CardProject />
        </Box>
      </>
    </Box>
  )
}
