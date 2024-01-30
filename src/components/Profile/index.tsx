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

import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

interface UserProps {
  user_id: number
  avatar: string
  email: string
  first_name: string
  last_name: string
}
interface ProfileProps {
  handleCreateANewProject: () => void
}

export default function Profile({ handleCreateANewProject }: ProfileProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const query = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const response = await axios.get(
          'https://5a89-2804-868-d043-2252-2d74-8774-3013-58ff.ngrok-free.app/users',
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          },
        )
        setUser(response.data[0])
        return response.data[0]
      } catch (error) {
        throw new Error('erro ao fazer requisição' + error)
      }
    },
  })

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
