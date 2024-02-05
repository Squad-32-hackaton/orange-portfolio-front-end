import { theme } from '../../styles/theme'

export const modalContainer = {
  backgroundColor: 'white',
  width: '19.5rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBottom: '1rem',
  paddingTop: '1rem',
  color: '#000',

  [theme.breakpoints.up('md')]: {
    width: '21.9rem',
    paddingTop: '0',
  },

  [theme.breakpoints.up('xl')]: {
    width: '21.9rem',
    paddingTop: '0',
  },
}

export const paragraph = {
  textAlign: 'start',
  paddingLeft: '1rem',
}

export const section = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '1.5rem',
  marginTop: '23rem',
}

export const title = {
  textAlign: 'center',
  fontSize: '1.5rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  fontsize: '1.5rem',
  letterSpacing: '0.5px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '1rem',
  },

  [theme.breakpoints.up('xl')]: {
    paddingTop: '1rem',
  },
}

export const circle = {
  color: 'green',
  fontSize: '2.5rem',
  margin: 'auto',
  marginBottom: '1rem',
}

export const button = {
  backgroundColor: '#FF5522',
  marginBottom: '0.5rem',
  width: '15rem',
}
