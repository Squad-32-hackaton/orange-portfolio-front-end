import {
  section,
  top,
  profile,
  Photo,
  name,
  data,
  title,
  tags,
  tag,
  paragraph,
  divPhoto,
  description,
  divNameDate,
  textDescription,
  modalContainer,
  Image,
  divImg,
  styleIcon,
  buttonClose,
} from './styles'
import ProfilePhoto from '../../assets/img/ProfileImage.png'
import CloseIcon from '@mui/icons-material/Close'
import ImageProject from '../../assets/img/CardProjectLarge.png'
import { Box } from '@mui/material'

export default function ModalCardProjectDesktop() {
  return (
    <Box sx={section}>
      <Box sx={modalContainer}>
        <Box sx={buttonClose}>
          <CloseIcon sx={styleIcon} />
        </Box>
        <Box sx={top}>
          <Box sx={profile}>
            <Box sx={divPhoto}>
              <Photo src={ProfilePhoto} />
            </Box>
            <Box sx={divNameDate}>
              <Box sx={name}>Bianca Martin </Box>
              <Box sx={data}>02/24</Box>
            </Box>
          </Box>
          <Box sx={title}> Ecommerce One Page</Box>
          <Box sx={tags}>
            <Box sx={tag}>UX</Box>
            <Box sx={tag}>Web</Box>
          </Box>
        </Box>

        <Box sx={divImg}>
          <Image src={ImageProject} />
        </Box>

        <Box sx={description}>
          <Box sx={paragraph}>
            Temos o prazer de compartilhar com vocês uma variação do nosso
            primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar
            uma versão mais minimalista do nosso primeiro projeto.
          </Box>
          <Box sx={textDescription}>
            {' '}
            Download <br />
            <a href="https://gumroad.com/products/wxCSL">
              https://gumroad.com/products/wxCSL
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
