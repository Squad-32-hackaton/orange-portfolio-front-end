import { styled } from "@mui/system";


export const Container = styled('div')({
 width: '100%',
 minHeight: '100vh',
 display: 'flex',
 flexDirection: 'column',
 backgroundColor: '#fff',
 alignItems: 'center',
})

export const InputContainer = styled('div')({
 width:'100%',
 display:'flex',
 flexDirection:'column',
 gap:'1rem',
})

export const ProjectsContainer = styled('div')({
 minHeight:'16rem',
 width:'calc(100% - 3rem)',
 margin:'1rem 1.5rem',
 backgroundColor: '#E6E9F2',

 display: 'flex',
 
 justifyContent: 'center',
 flexDirection:'column',
 color:'#323232',
 gap:'1rem',
 textAlign:'left'
})


