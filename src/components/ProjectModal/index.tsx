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
  formTag,
} from './styles'
import { z } from 'zod'
import TextField from '@mui/material/TextField'
import UploaderImage from '../UploaderImage'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createNewProjectService } from '../../services/createProjectService'

const formSchema = z.object({
  title: z.string().min(2, 'Deve declarar o titulo do projeto'),
  tags: z.string().array().nonempty('Declare as tecnologias usadas no projeto'),
  description: z.string().min(15, 'A descrição deve ter + 15 caracteres'),
})

export type FormSchemaProps = {
  title: string
  tags: string
  description: string
  image: string
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
    // formState: { errors },
  } = useForm<FormSchemaProps>()

  const onSubmit: SubmitHandler<FormSchemaProps> = async ({
    description,
    tags,
    title,
  }: FormSchemaProps) => {
    const tagsArray = tags.split(',')

    const object = {
      title,
      description,
      tags: tagsArray,
      image: previewImage,
    }

    try {
      await formSchema.parseAsync(object)
      await createNewProjectService(object)
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        console.error('Erro de validação:', error.errors)
      } else {
        console.error('Ocorre um erro:', error)
      }
    }

    console.log(object)
  }

  // Uploader Image Logic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleGetImageFile(event: any) {
    const image = event.target.files[0]
    setSelectedImage(image)

    const previewImage = URL.createObjectURL(image)
    setPreviewImage(previewImage)
    console.log(image)
  }
  //
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formTag}>
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
              {...register('image')}
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
