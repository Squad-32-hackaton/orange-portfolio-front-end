import Header from '../../components/Header'
import { Container, Title } from './styles'
import CardProject from '../../components/CardProject';
import Detail from '../../components/Detail';

export default function DetailProject() {

  return (
   <Container >

      <Header />

      <Title>Ecommerce One Page</Title>

      <CardProject/>

      <Detail/>
      
   </Container>

  )
}
