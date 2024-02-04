import {
  buttonProfile,
  country,
  image,
  imageContainer,
  profileContainer,
  profileText,
  textContainer,
  userName,
} from './styles'
import ProfileImage from '../../assets/img/ProfileImage.png'
import Button from '@mui/material/Button'
import { Avatar, Box, Typography } from '@mui/material'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

interface ProfileProps {
  handleCreateANewProject: () => void
}

export default function Profile({ handleCreateANewProject }: ProfileProps) {
  const { user } = useContext(AuthContext)

  return (
    <Box sx={profileContainer}>
      <Box sx={imageContainer}>
        <Avatar alt="Login Image" src={ProfileImage} sx={image} />
      </Box>

      <Box sx={textContainer}>
        <Box sx={profileText}>
          <Typography sx={userName} variant="h1">
            {`${user.first_name} ${user.last_name}`}
          </Typography>
          <Typography sx={country}>Brasil</Typography>
        </Box>

        <Button
          variant="contained"
          color="inherit"
          size="large"
          sx={buttonProfile}
          onClick={() => handleCreateANewProject()}
        >
          ADICIONAR PROJETO
        </Button>
      </Box>
      <ReactQueryDevtools />
    </Box>
  )
}
