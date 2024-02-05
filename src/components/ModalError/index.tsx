import Button from '@mui/material/Button'
import DangerousIcon from '@mui/icons-material/Dangerous'
import { modalContainer, button, circle, title, section } from './styles'
import { Box } from '@mui/material'

export default function ModalError() {
  return (
    <Box sx={section}>
      <Box sx={modalContainer}>
        <Box sx={title}>Houve um erro ao adicionar o projeto!</Box>
        <DangerousIcon sx={circle} />
        <Button variant="contained" sx={button}>
          voltar para projetos
        </Button>
      </Box>
    </Box>
  )
}
