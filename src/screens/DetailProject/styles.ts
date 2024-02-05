import { theme } from '../../styles/theme'

export const container = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  alignItems: 'center',
  overflow: 'scroll',
  gap: '1rem',

  [theme.breakpoints.up('xl')]: {},
}

export const title = {
  padding: '0',
  margin: '0',
  marginTop: '3.12rem',
  marginBottom: '0.5rem',
}
