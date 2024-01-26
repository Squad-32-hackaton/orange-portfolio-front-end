import {styled} from '@mui/system'


export const ProjectModalMain = styled('div')({
 display:'flex',
 alignItems:'center',
 justifyContent:'center',
 height: '100vh',
 maxHeight: '100vh',
 overflow: 'hidden',
})

export const ProjectModalContainer = styled('div')({
 backgroundColor:'#fff',
 margin: '0 1rem',
 maxHeight: '80vh',
 overflowY: 'auto',
 padding:'1rem 1rem 5rem 1.5rem',
})

export const ProjectModalContent = styled('div')({
 display:'flex',
 flexDirection:'column',
 gap:'1rem',
 minHeight:'16rem',
 margin:'0 1.5rem'
})