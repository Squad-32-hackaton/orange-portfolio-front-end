import {
  container,
  divInfos,
  divForaInfos,
  divTags,
  tagStyle,
  aling,
  imageContainer,
  userName,
} from './styles'

import Card from '../../assets/img/CardProjectLarge.png'

import ProfilePhoto from '../../assets/img/ProfileImage.png'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { CardProjectDrawer } from '../CardProjectDrawer'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { useContext } from 'react'
interface CardDataProps {
  name: string
  avatar: string
  tags: string[]
  projectId: number
}

export default function CardProject({ name, tags, projectId }: CardDataProps) {
  return (
    <Box sx={container}>
      <Box sx={aling}>
        <Box sx={imageContainer}>
          <img src={Card} alt="" />

          <CardProjectDrawer projectId={projectId} />
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
