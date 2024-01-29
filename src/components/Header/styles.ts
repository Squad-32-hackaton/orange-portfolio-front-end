import { styled } from "@mui/system";
import { theme } from "../../styles/theme";

// Styled Components 

export const container = {
 width: '100%',
 height: '4rem',
 backgroundColor: '#111133',
 display: 'flex',
 justifyContent:'space-between'
}

// Image Component

export const Image = styled('img')({
 width: '5.30rem',
 height: '2rem',
 backgroundSize:'cover'
})


export const listContainer = {
 display:'flex',
 width:'300px',
 alignItems: 'center',
 gap:'3px',
 ml:'6.25rem',

 span: {

  textAlign:'center',
 },

 [theme.breakpoints.down('md')] : {
  display:'none',
 }
}
export const appBarContainer = {
 width: '100%',
}