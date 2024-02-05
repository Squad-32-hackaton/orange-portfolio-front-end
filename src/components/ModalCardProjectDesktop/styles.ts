import { styled } from '@mui/system'
import { theme } from '../../styles/theme'

export const section = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '7.5rem',
}

export const modalContainer = {
  width: '65.1rem',
  backgroundColor: 'white',

  [theme.breakpoints.down('md')]: {
    width: '50rem',
  },
}

export const buttonClose = {
  backgroundColor: 'white',
  float: 'right',
  marginTop: '1rem',
  marginRight: '1rem',
  padding: '0',

  '&:focus': {
    outline: 'none',
  },
}

export const styleIcon = {
  fontSize: '2rem',
}

export const top = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: '6.3rem',
  paddingRight: '4.5rem',
  alignItems: 'center',
  marginTop: '3.5rem',
}

export const profile = {
  display: 'flex',
  alignItems: 'center',
}

export const divPhoto = {

}

export const Photo = styled ('img') ({
  width: '2.5rem',
  borderRadius: '90px',
})

export const divNameDate = {
  marginLeft: '0.75rem',
}

export const name = {
  margin: '0',
  fontSize: '1rem',
}

export const data = {
  margin: '0',
  fontSize: '1rem',
}

export const title = {
  fontSize: '1.5rem',
}

export const tags = {
  display: 'flex',
}

export const tag = {
  backgroundColor: 'rgba(0, 0, 0, 0.08)',
  color: 'black',
  borderRadius: '100px',
  padding: '0.75rem',
  paddingTop: '0.43rem',
  paddingBottom: '0.43rem',
  marginLeft: '0.62rem',
}

export const divImg = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '1rem',
}

export const Image = styled('img')({
  width: '52rem',

  [theme.breakpoints.down('md')]: {
    width: '37rem',
  },
})

export const description = {
  marginLeft: '6.3rem',
  marginRight: '6.3rem',
}

export const paragraph = {
  letterSpacing: '0.5px',
  lineHeight: '1rem',
  marginTop: '4rem',
}

export const textDescription = {
  letterSpacing: '0.5px',
  lineHeight: '1rem',
  marginBottom: '6.1rem',
}
