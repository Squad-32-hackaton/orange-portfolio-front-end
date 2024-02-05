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
  inputContainer,
  imageContainer,
  buttonContainer,
} from './styles'

import { z } from 'zod'

import TextField from '@mui/material/TextField'
import UploaderImage from '../UploaderImage'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { ModalContext } from '../../contexts/ModalsContext'

const formSchema = z.object({
  title: z
    .string()
    .min(2, 'Deve declarar o titulo do projeto')
    .max(50, 'O campo deve ter menos que 50 caracteres'),
  tags: z.string().array().nonempty('Declare as tecnologias usadas no projeto'),
  description: z.string().min(15, 'A descrição deve ter + 15 caracteres'),
})

export type FormSchemaProps = {
  title: string
  tags: string
  link: string
  description: string
  image_id: number
}

type ProjectModalProps = {
  handleClose: () => void
}

export default function ProjectModal({ handleClose }: ProjectModalProps) {
  // Local States
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState('')
  const { createNewProjectService, postImageUserService } =
    useContext(ProjectsContext)

  const {
    changeModalSuccessState,
    handleSetCurrentModalType,
    currentModalType,
    handleCloseAllModals,
    currentType,
  } = useContext(ModalContext)
  // React-Hook-Form Logic
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormSchemaProps>()

  const onSubmit: SubmitHandler<FormSchemaProps> = async ({
    description,
    tags,
    link,
    title,
  }: FormSchemaProps) => {
    let imageId = {}

    try {
      if (selectedImage) {
        const formData = new FormData()
        formData.append('file', selectedImage)
        const res = await postImageUserService(formData)
        imageId = res.image.image_id
      }
    } catch (error) {
      console.log(error)
    }
    const tagsArray = tags.split(',')

    const object = {
      title,
      description,
      link,
      tags: tagsArray,
      image_id: imageId,
    }

    try {
      const parse = await formSchema.parseAsync(object)
      if (parse) {
        handleSetCurrentModalType('add')
        const res = createNewProjectService(object)
        changeModalSuccessState(true)
      }
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        console.error('Erro de validação:', error.errors)
      } else {
        console.error('Ocorre um erro:', error)
      }
    }
  }

  // Uploader Image Logic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleGetImageFile(event: any) {
    const image = event.target.files[0]
    setSelectedImage(image)

    const previewImage = URL.createObjectURL(image)
    setPreviewImage(previewImage)

    const formData = new FormData()
    formData.append('file', image)
    console.log(formData.values())
  }
  //
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={{ formTag }}>
      <Box sx={projectModalMain}>
        <Box sx={projectModalContainer}>
          <Typography sx={modalTitle}>
            {currentType === 'add' ? 'Adicionar' : 'Editar'} projeto
          </Typography>
          <Box sx={projectModalContent}>
            <Box sx={inputContainer}>
              <TextField
                placeholder="Titulo"
                {...register('title', { required: true })}
              />

              <TextField
                placeholder="Tags"
                {...register('tags', { required: true })}
              />

              <TextField
                placeholder="Link"
                {...register('link', { required: true })}
              />

              <TextField
                placeholder="Descrição"
                {...register('description', { required: true })}
                multiline
                minRows={2}
              />
            </Box>
            <Box sx={imageContainer}>
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
                {...register('image_id')}
                onChange={handleGetImageFile}
              />
            </Box>
          </Box>
          <Typography
            variant="body1"
            color="#00000091"
            sx={{ padding: '1rem 1.5rem' }}
          >
            Visualizar publicação
          </Typography>
          <Stack direction="row" spacing={2} sx={buttonContainer}>
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
              onClick={() => handleCloseAllModals()}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Box>
    </form>
  )
}
