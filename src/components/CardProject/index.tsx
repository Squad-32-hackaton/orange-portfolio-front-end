import {
  aling,
  container,
  divForaInfos,
  divInfos,
  divTags,
  imageContainer,
  tagStyle,
  userName,
} from './styles'

import Card from '../../assets/img/CardProjectLarge.png'

import { Avatar, Box, Typography } from '@mui/material'
import ProfilePhoto from '../../assets/img/ProfileImage.png'
import { CardProjectDrawer } from '../CardProjectDrawer'

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
              tags.map((tag) => (
                <Box sx={tagStyle} key={tag}>
                  {`${tag.slice(0, 10)}${tag.length > 10 ? '...' : ''}`}
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
