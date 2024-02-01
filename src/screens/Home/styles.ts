import { theme } from '../../styles/theme'

export const container = {
  width: '100%',
  minHeight: '100vh',
  //  maxWidth: '80rem',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  alignItems: 'center',
  overflow: 'scroll',
  gap: '1rem',
}

export const inputContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}

export const uploaderContainer = {
  width: '100%',
  height: '100%',
  padding: '1rem 0',

  [theme.breakpoints.up('lg')]: {
    padding: '0',
  },
}

export const homeTextField = {
  maxWidth: '32rem',
}

export const homeTextLabel = {
  color: '#0B0C0D',
  fontSize: '1.25rem',
  fontWeight: '800',
  lineHeight: '1.25rem',
  opacity: '0.6',

  [theme.breakpoints.down('md')]: {},
}
export const menuIconButton = {
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}

export const projectSectionContainer = {
  width: 'calc(100% - 3rem)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  [theme.breakpoints.up('lg')]: {
    gap: '80px',
  },
}
