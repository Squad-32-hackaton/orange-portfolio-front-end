import { createContext, useState } from 'react'

interface ModalContextProps {
  modalSuccessOpen: boolean
  openProjectModal: boolean
  openModalDelete: boolean
  currentModalType: string
  changeModalSuccessState: (type: boolean) => void
  handleModalCreateANewProject: () => void
  handleCloseAllModals: () => void
  handleOpenDeleteModal: () => void
  handleSetCurrentModalType: (type: 'add' | 'delete' | 'edit') => void
}

interface ModalContextDataProps {
  children: React.ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export const ModalContextProvider = ({ children }: ModalContextDataProps) => {
  const [modalSuccessOpen, setModalSucessOpen] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false)
  const [currentModalType, setCurrentModalType] = useState<string>('')

  function handleModalCreateANewProject() {
    setOpenProjectModal(!openProjectModal)
  }
  function changeModalSuccessState(type: boolean) {
    setModalSucessOpen(type)
  }
  function handleCloseAllModals() {
    setModalSucessOpen(false)
    setOpenProjectModal(false)
    setOpenModalDelete(false)
  }
  function handleOpenDeleteModal() {
    setOpenModalDelete(!openModalDelete)
  }
  function handleSetCurrentModalType(type: 'add' | 'delete' | 'edit') {
    switch (type) {
      case 'add':
        setCurrentModalType('Projeto adicionado com sucesso')
        break
      case 'delete':
        setCurrentModalType('Projeto deletado com sucesso')
        break
      case 'edit':
        setCurrentModalType('Edição concluída com sucesso!')
        break
    }
  }

  return (
    <ModalContext.Provider
      value={{
        changeModalSuccessState,
        modalSuccessOpen,
        openProjectModal,
        handleModalCreateANewProject,
        handleCloseAllModals,
        openModalDelete,
        handleOpenDeleteModal,
        handleSetCurrentModalType,
        currentModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
