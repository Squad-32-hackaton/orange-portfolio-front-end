import { styled } from '@mui/system'
import { theme } from '../../styles/theme'

export const ModalContainer = styled('div')({
  backgroundColor: 'white',
  width: '19.5rem',
  flexDirection: 'column',
  paddingBottom: '1rem',
  paddingTop: '1rem',

  [theme.breakpoints.up('xl')]: {
    width: '26.3rem',
    paddingTop: '0',
  },
})

export const Title = styled('h5')({
  textAlign: 'start',
  fontSize: '1.5rem',
  paddingLeft: '1.5rem',
  marginTop: '0',
  marginBottom: '0',
  fontsize: '1.5rem',
  letterSpacing: '0.5px',

  [theme.breakpoints.up('xl')]: {
    width: '26.3rem',
    margin: '2rem',
    paddingLeft: '0',
  },
})

export const Paragraph = styled('p')({
  textAlign: 'start',
  paddingLeft: '1.5rem',
  fontsize: '1rem',
  fontWeight: '400',
  letterSpacing: '0.5px',

  [theme.breakpoints.up('xl')]: {
    paddingLeft: '2rem',
    paddingRight: '4rem',
  },
})

export const Section = styled('section')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000',
})

export const Buttons = styled('div')({
  display: 'flex',
  justifyContent: 'start',
  paddingLeft: '1rem',

  [theme.breakpoints.up('xl')]: {
    paddingLeft: '2rem',
  },
})

export const text = {
  textAlign: 'start',
  paddingLeft: '1rem',
}

export const firstButton = {
  backgroundColor: '#FF5522',
  marginRight: '1rem',
  width: '6.6rem',
}

export const secondButton = {
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  color: 'rgba(0, 0, 0, 0.38)',
  width: '7.7rem',
}
