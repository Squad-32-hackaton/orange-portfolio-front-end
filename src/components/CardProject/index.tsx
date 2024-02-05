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

import Card from '../../assets/img/CardProjectLarge.png'

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
}

export default function CardProject({ name, tags, projectId }: CardDataProps) {
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

  const [isHovered, setIsHovered] = React.useState(false);


  return (
    <Box
    sx={container}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <Box sx={aling}>
      <Box sx={imageContainer}>
        <img src={Card} alt="" />

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
              style={{minWidth: '0'}}
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
        )}

        </Box>
        <Box sx={divForaInfos}>
          <Box sx={divInfos}>
            <Avatar src={ProfilePhoto} />
            <Typography sx={userName}>{`${name}`} . 02/24</Typography>
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
