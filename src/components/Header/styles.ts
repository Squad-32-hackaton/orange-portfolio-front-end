import { styled } from '@mui/system'
import { theme } from '../../styles/theme'

// Styled Components

export const container = {
  width: '100%',
  height: '4rem',
  backgroundColor: '#111133',
  display: 'flex',
  justifyContent: 'space-between',
}

export const toolbar = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}

// Image Component

export const Image = styled('img')({
  width: '5.30rem',
  height: '2rem',
  backgroundSize: 'cover',
})

// export const listContainer = {
//   display: 'flex',
//   width: '300px',
//   alignItems: 'center',
//   gap: '3px',
//   ml: '6.25rem',
//   textDeorator: 'none',

//   span: {
//     textAlign: 'center',
//   },

//   a: {
//     textDecoration: 'none',
//     color: '#fff',
//   },

//   [theme.breakpoints.down('md')]: {
//     display: 'none',
//   },
// }
export const appBarContainer = {
  width: '100%',
}

export const listContainer = {
  width: '9.75rem',
  marginTop: '64px',

  '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },

  flexShrink: 0,
  '& .MuiDrawer-paper': {
    marginTop: '4rem',
    width: '9.75rem',
    borderRadius: '0 0 0.25rem 0',
  },

  span: {
    textAlign: 'center',
  },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}

export const DivLine = styled('div')({
  border: '1px solid black',
  opacity: '0.1',
})

export const listItem = {
  paddingBottom: '3rem',
}

export const listContainerFull = {
  display: 'none',
  padding: '0',

  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}

export const list = {
  display: 'flex',
  padding: '0',
  marginLeft: '4rem',
}

export const ListItemButton = styled('button')({
  backgroundColor: '#111133',
  color: 'white',
  width: '110px',
  padding: '0',
  outline: 'none',

  '&:hover': {
    outline: 'none',
  },

  '&:active': {
    outline: 'none',
  },
})

export const ListItemButtonModal = styled('button')({
  backgroundColor: 'white',
  color: 'black',
  width: '110px',
  padding: '0',
  outline: 'none',

  '&:hover': {
    outline: 'none',
  },

  '&:active': {
    outline: 'none',
  },
})
