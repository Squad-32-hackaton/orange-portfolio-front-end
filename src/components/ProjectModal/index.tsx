import { Box, Button, Input, Stack, Typography } from '@mui/material'
import {
  projectModalMain,
  projectModalContainer,
  projectModalContent,
  image,
  modalTitle,
  imageContainerTitle,
  submitButton,
  cancelButton,
} from './styles'
// import { z } from 'zod'
import TextField from '@mui/material/TextField'
import UploaderImage from '../UploaderImage'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

// const FormSchema = z.object({
//   title: z.string(),
//   tags: z.string().array().nonempty(),
//   description: z.string().min(15),
// })

type FormSchemaProps = {
  title: string
  tags: string[]
  description: string
}

type ProjectModalProps = {
  handleClose: () => void
}

export default function ProjectModal({ handleClose }: ProjectModalProps) {
  // Local States
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState('')

  // React-Hook-Form Logic
  const {
    register,
    handleSubmit,
    // formState: { erros },
  } = useForm<FormSchemaProps>()

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => console.log(data)

  // Uploader Image Logic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleGetImageFile(event: any) {
    const image = event.target.files[0]
    setSelectedImage(image)

    const previewImage = URL.createObjectURL(image)
    setPreviewImage(previewImage)
    console.log(image)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Box sx={projectModalMain}>
        <Box sx={projectModalContainer}>
          <Box sx={projectModalContent}>
            <Typography sx={modalTitle}> Adicionar projeto</Typography>
            <TextField
              placeholder="Titulo"
              {...register('title', { required: true })}
            />

            <TextField
              placeholder="Tags"
              {...register('tags', { required: true })}
            />

            <TextField
              placeholder="Descrição"
              {...register('description', { required: true })}
              multiline
              minRows={2}
            />

            <Typography variant="body1" sx={imageContainerTitle}>
              Selecione o conteúdo que você deseja fazer upload
            </Typography>

            {selectedImage ? (
              <img src={previewImage} alt="" style={image} />
            ) : (
              <label htmlFor="imageUploader">
                <UploaderImage
                  texts={[
                    {
                      content:
                        'Compartilhe seu talento com milhares de pessoas',
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
              <Button
                variant="contained"
                sx={submitButton}
                size="large"
                type="submit"
              >
                Salvar
              </Button>
              <Button
                variant="contained"
                sx={cancelButton}
                size="large"
                onClick={() => handleClose()}
              >
                Cancelar
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </form>
  )
}
