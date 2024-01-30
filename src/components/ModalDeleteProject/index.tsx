import { Modal, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import {
  ModalContainer,
  Title,
  firstButton,
  secondButton,
  text,
  Paragraph,
  Section,
  Buttons,
} from './styles'

import ModalProjectDeletedSuccessfully from '../ModalProjectDeletedSuccessfully'
import { useState } from 'react'

interface ModalDeleteProjectProps {
  handleChangeState: () => void
}

export default function ModalDeleteProject({
  handleChangeState,
}: ModalDeleteProjectProps) {
  const [openModalDelete, setOpenModalDelete] = useState(false)

  function handleSuccessfullyDelete() {
    setOpenModalDelete(!openModalDelete)
  }

  return (
    <>
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
              onClick={() => handleSuccessfullyDelete()}
            >
              Excluir
            </Button>
            <Button
              variant="contained"
              sx={secondButton}
              onClick={() => handleChangeState()}
            >
              Cancelar
            </Button>
          </Buttons>
        </ModalContainer>
      </Section>
      <Modal
        children={<ModalProjectDeletedSuccessfully />}
        open={openModalDelete}
      />
    </>
  )
}
