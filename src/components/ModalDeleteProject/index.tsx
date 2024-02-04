import Button from '@mui/material/Button'
import {
  ModalContainer,
  Title,
  firstButton,
  secondButton,
  Paragraph,
  Section,
  Buttons,
} from './styles'

import { useContext } from 'react'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { ModalContext } from '../../contexts/ModalsContext'

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
    <Section>
      <ModalContainer>
        <Title>Deseja Excluir?</Title>
        <Paragraph>
          Se você prosseguir irá excluir o projeto do seu portfólio
        </Paragraph>
        <Buttons>
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
        </Buttons>
      </ModalContainer>
    </Section>
  )
}
