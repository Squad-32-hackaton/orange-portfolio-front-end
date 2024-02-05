import { Box } from '@mui/material'
import { section, aling, text } from './styles'

export default function Detail() {
  return (
    <Box sx={section}>
      <Box sx={aling}>
        <Box sx={text}>
          Temos o prazer de compartilhar com vocês uma variação da nosso
          primeiro recurso gratuito, Monoceros. É um modelo de uma página para
          mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e
          minimalista do nosso primeiro template de e-commerce.
        </Box>
        <Box>
          {' '}
          Download <br />{' '}
          <a href="https://gumroad.com/products/wxCSL">
            https://gumroad.com/products/wxCSL
          </a>{' '}
        </Box>
      </Box>
    </Box>
  )
}
