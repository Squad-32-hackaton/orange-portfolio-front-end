import Header from '../../components/Header'
import { Container, Title, inputContainer, textField, DivCards } from './styles'
import CardProject from '../../components/CardProject';
import { TextField } from '@mui/material';
import { InputContainer } from '../Home/styles';

export default function MyPortfolio() {

  return (
      <Container >

        <Header />

        <Title>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</Title>

        <InputContainer sx={inputContainer}>
          <TextField label='Buscar tags' sx={textField} />
        </InputContainer>

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
