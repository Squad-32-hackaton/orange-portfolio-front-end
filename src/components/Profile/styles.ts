import { theme } from '../../styles/theme'

export const profileContainer = {
  width: '19.5rem',
  height: '14.75rem',
  marginTop: '3.5rem',
  marginBottom: '2.5rem',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.62rem',
    width: 'auto',
    height: '7.62rem',
  },
}

export const imageContainer = {
  width: '100%',
  height: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    width: 'auto',
  },
}

export const image = {
  width: '7.6rem',
  height: '7.6rem',
}

export const profileText = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'center',
  margin: '1rem 0',
  color: '#000',
  gap: '2px',
  textAlign: 'left',

  [theme.breakpoints.up('md')]: {
    margin: '0',
    justifyContent: 'flex-start',
  },
}

export const userName = {
  fontSize: '1.5rem',
  fontWeight: '400',
  margin: '0',
  textAlign: 'start',
  fontFamily: 'roboto',

  [theme.breakpoints.up('md')]: {
    marginBottom: '2px',
  },
}

export const country = {
  margin: '0',
  textAlign: 'start',
  color: '#00000061',
}

export const textContainer = {
  textAlign: 'start',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
  },
}

export const buttonProfile = {
  color: '#00000061',
  height: '2.625rem',
  padding: '0 1.375rem',
  borderRadius: '4px',
  boxShadow: '0',
}
