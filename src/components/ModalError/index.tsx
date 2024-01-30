import Button from '@mui/material/Button'
import DangerousIcon from '@mui/icons-material/Dangerous'
import { ModalContainer, button, circle, Title, Section } from './styles'

export default function ModalError() {
  return (
    <Section>
      <ModalContainer>
        <Title>Houve um erro ao adicionar o projeto!</Title>
        <DangerousIcon sx={circle} />
        <Button variant="contained" sx={button}>
          voltar para projetos
        </Button>
      </ModalContainer>
    </Section>
  )
}
