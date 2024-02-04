import { Edit } from '@mui/icons-material'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import { iconContainer, menuListContainer, penIcon } from './styles'
import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalsContext'
import { ProjectsContext } from '../../contexts/ProjectsContext'

export function CardProjectDrawer(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { handleOpenDeleteModal } = useContext(ModalContext)
  const { handleSetCurrentProject } = useContext(ProjectsContext)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={iconContainer}
      onClick={() => handleSetCurrentProject(props.projectId)}
    >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Edit sx={penIcon} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={menuListContainer}
      >
        <MenuItem onClick={handleClose}>Editar</MenuItem>
        <MenuItem onClick={handleOpenDeleteModal}>Excluir</MenuItem>
      </Menu>
    </Box>
  )
}
