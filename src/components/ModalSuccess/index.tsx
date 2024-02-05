import Button from '@mui/material/Button'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { modalContainer, button, circle, title, section } from './styles'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalsContext'
import { Box } from '@mui/material'

export default function ModalSuccess() {
  const { handleCloseAllModals, currentModalType } = useContext(ModalContext)

  return (
    <Box sx={section}>
      <Box sx={modalContainer}>
        <Box sx={title}>{currentModalType}</Box>
        <CheckCircleRoundedIcon sx={circle} />
        <Button variant="contained" sx={button} onClick={handleCloseAllModals}>
          voltar para projetos
        </Button>
      </Box>
    </Box>
  )
}
