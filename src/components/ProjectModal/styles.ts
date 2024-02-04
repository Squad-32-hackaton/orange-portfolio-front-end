import { theme } from '../../styles/theme'

export const formTag = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}
export const projectModalMain = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  maxHeight: '100vh',
  overflow: 'hidden',

  hover: {
    cursor: 'pointer',
  },
}

export const projectModalContainer = {
  backgroundColor: '#fff',
  margin: '0 1rem',
  maxHeight: '80vh',
  overflowY: 'auto',
  padding: '1rem 1rem 5rem 1.5rem',

  [theme.breakpoints.up('lg')]: {
    width: '55.62rem',
  },
}

export const projectModalContent = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '16rem',
  margin: '0 1.5rem',
  gap: '1rem',

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row-reverse',
  },
}

export const inputContainer = {
  gap: '1rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

export const imageContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'space-between',
}
export const image = {
  width: '100%',
  height: '100%',
}

export const modalTitle = {
  color: '#515255',
  fontSize: '1.5rem',
  margin: '1rem 1.5rem',
  gap: '1rem',
}

export const imageContainerTitle = {
  color: '#515255',
  letterSpacing: '0.15px',
  lineHeight: '1rem',
}
export const buttonContainer = {
  justifyContent: 'space-between',
  padding: '0 1.5rem',

  [theme.breakpoints.up('lg')]: {
    width: '50%',
    justifyContent: 'flex-start',
  },
}
export const submitButton = {
  width: '45%',

  [theme.breakpoints.up('lg')]: {
    width: '6.25rem',
  },
}

export const cancelButton = {
  width: '45%',
  backgroundColor: '#00000061',
  [theme.breakpoints.up('lg')]: {
    width: '6.25rem',
  },
}
