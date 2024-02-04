import { theme } from '../../styles/theme'

export const container = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  borderRadius: '4px',

  // [theme.breakpoints.up('md')]: {
  //   width: '46%',
  //   justifyContent: 'start',
  //   margin: '1rem',
  // },

  // [theme.breakpoints.up('lg')]: {
  //   width: '30%',
  //   justifyContent: 'start',
  //   margin: '1rem',
  // },

  // [theme.breakpoints.up('xl')]: {
  //   width: '23%',
  //   justifyContent: 'start',
  //   margin: '1rem',
  // },
}

export const aling = {
  width: '100%',
  height: '100%',

  img: {
    width: '100%',
  },
}

// export const image = {
//   width: '19.5rem',
//   display: 'flex',
//   margin: 'auto',

//   [theme.breakpoints.up('md')]: {
//     width: '100%',
//     height: '100%',
//   },

//   [theme.breakpoints.up('lg')]: {
//     width: '100%',
//     height: '100%',
//   },
// }

export const divForaInfos = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    width: '100%',
  },

  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}

export const divInfos = {
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    width: '100%',
  },

  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}

export const profile = {
  borderRadius: '90px',
  width: '1.5rem',
  height: '1.5rem',
  marginRight: '1rem',
}

export const divTags = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  // [theme.breakpoints.up('md')]: {
  //   display: 'none',
  // },

  // [theme.breakpoints.up('lg')]: {
  //   display: 'none',
  // },
}

export const tag = {
  backgroundColor: 'rgba(0, 0, 0, 0.08)',
  color: 'black',
  borderRadius: '100px',
  padding: '0.75rem',
  paddingTop: '0.43rem',
  paddingBottom: '0.43rem',
  marginLeft: '0.62rem',

  [theme.breakpoints.up('lg')]: {
    padding: '0.75rem',
  },
}
