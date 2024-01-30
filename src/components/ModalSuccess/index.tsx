import Button from '@mui/material/Button'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { ModalContainer, button, circle, Title, Section } from './styles'

export default function ModalSuccess() {
  return (
    <Section>
      <ModalContainer>
        <Title>Projeto adicionado com sucesso!</Title>
        <CheckCircleRoundedIcon sx={circle} />
        <Button variant="contained" sx={button}>
          voltar para projetos
        </Button>
      </ModalContainer>
    </Section>
  )
}
