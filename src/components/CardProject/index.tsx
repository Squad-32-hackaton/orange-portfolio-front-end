import {
  container,
  divInfos,
  divForaInfos,
  divTags,
  tag,
  aling,
} from './styles'

import Card from '../../assets/img/CardProjectLarge.png'

import ProfilePhoto from '../../assets/img/ProfileImage.png'
import { Avatar, Box, Typography } from '@mui/material'

export default function CardProject() {
  return (
    <Box sx={container}>
      <Box sx={aling}>
        <img src={Card} alt="" />
        <Box sx={divForaInfos}>
          <Box sx={divInfos}>
            <Avatar src={ProfilePhoto} />
            <Typography sx={{ color: '#000', padding: '.25rem .5rem' }}>
              Bianca Martin . 02/24
            </Typography>
          </Box>
          <Box sx={divTags}>
            <Box sx={tag}>UX</Box>
            <Box sx={tag}>UX</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
