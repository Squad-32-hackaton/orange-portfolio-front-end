import { SxProps } from '@mui/material'
import { theme } from '../../styles/theme'

export const baseStyle = {
  padding: '2rem',
  backgroundColor: '#fff',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0',
  },
}

export const boxInputs = {
  [theme.breakpoints.up('md')]: {
    marginTop: '10rem',
    marginLeft: '5rem',
    marginRight: '7rem',
  },
}

export const cardMediaStyles = {
  width: '32.8rem',
  height: '51.4rem',
  objectFit: 'cover',
  marginBottom: '0.05rem',
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'block',
    marginLeftt: '1rem',
  },
}

export const IconButtonStyles = {
  backgroundColor: 'white',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#eeeeee',
  },
  width: '12.5rem',
  height: '1.875rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  padding: '1rem',
  gap: '0.5rem',
  textAlign: 'center',
}

export const boxGoogle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '4rem',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
  },

  [theme.breakpoints.up('xl')]: {
    justifyContent: 'center',
  },
}

export const typographyTitleStyles = {
  display: 'flex',
  fontSize: '1.5rem',
  marginBottom: '1rem',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem'
  },
}

export const LinkStyles: SxProps = {
  mt: '1rem',
  display: 'block',
  textAlign: 'left',
  fontFamily: 'Roboto',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1rem',
  letterSpacing: '0.094rem',
  color: '#818388',
  padding: '0',
  textDecoration: 'none',
}

export const styleBrButton = {
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}

export const textFieldBrOne = {
  [theme.breakpoints.up('md')]: {
    marginRight: '0.5rem',
  },
}

export const textFieldBrTwo = {
  [theme.breakpoints.up('md')]: {
    marginLeft: '0.5rem',
  },
}
