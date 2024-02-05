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
  hover: {
    display: 'none',
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
  height:'3.5rem',

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

export const tagStyle = {
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

export const imageContainer = {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
}

export const userName = {
  display: 'flex',
  color: '#000',
  padding: '.25rem .5rem',
  height:'3.5rem',
  flexDirection: 'column',
  justifyContent: 'center',

}

export const penIcon = {
  padding: '2px',
  background: '#FFCC99',
  borderRadius: '50%',
  color: '#000000',
  border: 'none',

}

export const iconContainer = {
  position: 'relative',
  right: '60px',
  top: '10px',

}

export const menuListContainer = {
  ul: {
    width: '208px',

  },
}


