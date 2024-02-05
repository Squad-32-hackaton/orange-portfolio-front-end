import Button from '@mui/material/Button'
import {
  modalContainer,
  title,
  firstButton,
  secondButton,
  paragraph,
  section,
  buttons,
} from './styles'

import { useContext } from 'react'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { ModalContext } from '../../contexts/ModalsContext'
import { Box } from '@mui/material'

export default function ModalDeleteProject() {
  const {
    handleCloseAllModals,
    handleSetCurrentModalType,
    changeModalSuccessState,
  } = useContext(ModalContext)
  const { handleDeleteUserProject, currentProjectId } =
    useContext(ProjectsContext)

  async function handleDeleteUserProjectAction() {
    try {
      handleDeleteUserProject(Number(currentProjectId))
      handleSetCurrentModalType('delete')
      changeModalSuccessState(true)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Box sx={section}>
      <Box sx={modalContainer}>
        <Box sx={title}>Deseja Excluir?</Box>
        <Box sx={paragraph}>
          Se você prosseguir irá excluir o projeto do seu portfólio
        </Box>
        <Box sx={buttons}>
          <Button
            variant="contained"
            sx={firstButton}
            onClick={() => handleDeleteUserProjectAction()}
          >
            Excluir
          </Button>
          <Button
            variant="contained"
            sx={secondButton}
            onClick={handleCloseAllModals}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
