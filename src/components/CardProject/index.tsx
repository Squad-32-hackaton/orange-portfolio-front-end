import {
  container,
  divInfos,
  divForaInfos,
  divTags,
  tagStyle,
  aling,
  imageContainer,
  userName,
  iconContainer,
  penIcon,
  menuListContainer,
} from './styles'

import ProfilePhoto from '../../assets/img/ProfileImage.png'

import { Avatar, Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalsContext'
import { Edit } from '@mui/icons-material'

interface CardDataProps {
  name: string
  avatar: string
  tags: string[]
  projectId: number
  image: string
  creationAt: string
}

export default function CardProject({
  name,
  tags,
  projectId,
  image,
  creationAt,
}: CardDataProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const {
    handleOpenDeleteModal,
    handleSetCurrentModalType,
    handleModalCreateANewProject,
  } = useContext(ModalContext)
  const { handleSetCurrentProject } = useContext(ProjectsContext)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [isHovered, setIsHovered] = React.useState(false)

  function handleEditProject() {
    handleSetCurrentModalType('edit')
    handleModalCreateANewProject()
  }

  return (
    <Box
      sx={container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={aling}>
        <Box sx={imageContainer}>
          <img
            src={`https://orangeportfoliosquad32.software/images/${image}`}
            alt="Imagem do projeto"
          />

          {isHovered && (
            <Box
              sx={iconContainer}
              onClick={() => handleSetCurrentProject(projectId)}
            >
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ minWidth: '0' }}
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
                <MenuItem onClick={handleEditProject}>Editar</MenuItem>
                <MenuItem onClick={handleOpenDeleteModal}>Excluir</MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
        <Box sx={divForaInfos}>
          <Box sx={divInfos}>
            <Avatar src={ProfilePhoto} />
            <Typography sx={userName}>
              {`${name}`} . {creationAt}{' '}
            </Typography>
          </Box>
          <Box sx={divTags}>
            {tags &&
              tags.map((tag) => {
                return (
                  <Box sx={tagStyle} key={tag}>
                    {tag}
                  </Box>
                )
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
