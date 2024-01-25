import {styled} from '@mui/system'

export const ProfileContainer = styled('div')({
 width: '19.5rem',
 height: '14.75rem', 
})

export const ImageContainer = styled('div')({
 width: '100%',
 height: '50%',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
})

export const Image = styled('img')({
 width: '7,6rem',
 height: '7,6rem',
 borderRadius: '50%',
})

export const ProfileText = styled('div')({
 width: '100%',
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 justifyContent: 'center',
 margin:'1rem 0',
 color:'#000',

 h1: {
  width:'50%',
  fontSize:'1.5rem',
  fontWeight:'400',
  margin:'0',
  textAlign:'start',
  fontFamily:'roboto',
 },
 p: {
  width:'50%',
  margin:'0',
  textAlign:'start',
  color:'#00000061'
 }
})