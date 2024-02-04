import Button from '@mui/material/Button'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { ModalContainer, button, circle, Title, Section } from './styles'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalsContext'

export default function ModalSuccess() {
  const { handleCloseAllModals, currentModalType } = useContext(ModalContext)

  return (
    <Section>
      <ModalContainer>
        <Title>{currentModalType}</Title>
        <CheckCircleRoundedIcon sx={circle} />
        <Button variant="contained" sx={button} onClick={handleCloseAllModals}>
          voltar para projetos
        </Button>
      </ModalContainer>
    </Section>
  )
}
