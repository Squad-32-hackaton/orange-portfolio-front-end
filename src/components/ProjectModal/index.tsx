import { Box, Button, Input, Stack, Typography } from '@mui/material'
import {
  projectModalMain,
  projectModalContainer,
  projectModalContent,
  image,
} from './styles'
import TextField from '@mui/material/TextField'
import UploaderImage from '../UploaderImage'
import { useState } from 'react'

type ProjectModalProps = {
  handleClose: () => void
}

export default function ProjectModal({ handleClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleGetImageFile(event: any) {
    const image = event.target.files[0]
    setSelectedImage(image)

    const previewImage = URL.createObjectURL(image)
    setPreviewImage(previewImage)
    console.log(image)
  }

  return (
    <Box sx={projectModalMain}>
      <Box sx={projectModalContainer}>
        <Box sx={projectModalContent}>
          <Typography
            sx={{
              color: '#515255',
              fontSize: '1.5rem',
            }}
          >
            {' '}
            Adicionar projeto
          </Typography>

          <TextField placeholder="Titulo" />
          <TextField placeholder="Tags" />
          <TextField placeholder="Descrição" multiline minRows={3} />

          <Typography
            variant="body1"
            sx={{
              color: '#515255',
              letterSpacing: '0.15px',
              lineHeight: '16px',
            }}
          >
            Selecione o conteúdo que você deseja fazer upload
          </Typography>

          {selectedImage ? (
            <img src={previewImage} alt="" style={image} />
          ) : (
            <label htmlFor="imageUploader">
              <UploaderImage
                texts={[
                  {
                    content: 'Compartilhe seu talento com milhares de pessoas',
                    type: 'subTitle',
                  },
                ]}
              />
            </label>
          )}
          <Input
            type="file"
            id="imageUploader"
            sx={{ display: 'none' }}
            onChange={handleGetImageFile}
          />

          <Typography variant="body1" color="#00000091">
            Visualizar publicação
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: 'space-between' }}
          >
            <Button variant="contained" sx={{ width: '45%' }} size="large">
              Salvar
            </Button>
            <Button
              variant="contained"
              sx={{ width: '45%', backgroundColor: '#00000061' }}
              size="large"
              onClick={() => handleClose()}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
