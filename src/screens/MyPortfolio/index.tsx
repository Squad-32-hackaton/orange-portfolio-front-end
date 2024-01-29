import { Container, Title, inputContainer, textField, DivCards } from './styles'
import CardProject from '../../components/CardProject';
import { Box, TextField } from '@mui/material';


export default function MyPortfolio() {

  return (
      <Container >

        <Title>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</Title>

        <Box sx={inputContainer}>
          <TextField label='Buscar tags' sx={textField} />
        </Box>

        <div>

        <DivCards>

        <CardProject />

        <CardProject />

        <CardProject />

        <CardProject />

        <CardProject />

        </DivCards>

        </div>

      </Container>


  )
}
