import { theme } from '../../styles/theme'

export const container = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  alignItems: 'center',
  overflow: 'scroll',
  gap: '1rem',
}

export const title = {
  padding: '0',
  margin: '0',
  fontSize: '1.5rem',
  lineHeight: '1.5rem',
  fontWeight: '400',
  marginTop: '3.12rem',
  marginBottom: '2.5rem',
  textAlign: 'center',
  width: '19.5rem',

  [theme.breakpoints.up('md')]: {
    width: '48.3rem',
    fontSize: '2.12rem',
    lineHeight: '2.12rem',
    letterSpacing: '0.25px',
  },

  [theme.breakpoints.up('lg')]: {
    width: '48.3rem',
    fontSize: '2.12rem',
    lineHeight: '2.12rem',
    letterSpacing: '0.25px',
  },
}

export const inputContainer = {
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    AlignItems: 'start',
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    AlignItems: 'start',
  },
}

export const textField = {
  margin: '0 1.5rem',
  size: 'medium',
  width: '19.5rem',
  display: 'flex',
  marginBottom: '1rem',

  [theme.breakpoints.up('md')]: {
    width: '45rem',
  },

  [theme.breakpoints.up('lg')]: {
    width: '45rem',
  },
}

export const divCards = {
  [theme.breakpoints.up('md')]: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },

  [theme.breakpoints.up('lg')]: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
}
