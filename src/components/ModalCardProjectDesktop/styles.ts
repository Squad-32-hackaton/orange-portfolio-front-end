import { styled } from '@mui/system'
import { theme } from '../../styles/theme'

export const Section = styled('div')({
    display:'flex',
    justifyContent:'center',
    marginTop:'7.5rem',
})

export const ModalContainer = styled('div')({
    width: '65.1rem',
    backgroundColor:'white',

    [theme.breakpoints.down('md')]:{
        width: '50rem',
    },
})

export const ButtonClose = styled('button')({
    backgroundColor:'white',
    float:'right',
    marginTop:'1rem',
    marginRight:'1rem',
    padding:'0',
    
    '&:focus': {
        outline: 'none',
      },

})

export const styleIcon = {
    fontSize:'2rem',

}

export const Top = styled('div')({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:'6.3rem',
    paddingRight:'4.5rem',
    alignItems:'center',
    marginTop:'3.5rem',

})

export const Profile = styled('div')({
    display:'flex',
    alignItems:'center',
})

export const DivPhoto = styled('div')({

})

export const Photo = styled('img')({
    width:'2.5rem',
    borderRadius:'90px',
    
})

export const DivNameDate = styled('div')({
    marginLeft:'0.75rem',
})

export const Name = styled('h5')({
    margin:'0',
    fontSize: '1rem',
})

export const Data = styled('h5')({
    margin:'0',
    fontSize: '1rem',
})

export const Title = styled('h2')({
    fontSize:'1.5rem'

})

export const Tags = styled('div')({
    display:'flex',
})

export const Tag = styled('div')({
    backgroundColor:'rgba(0, 0, 0, 0.08)',
    color:'black',
    borderRadius:'100px',
    padding:'0.75rem',
    paddingTop:'0.43rem',
    paddingBottom:'0.43rem',
    marginLeft:'0.62rem',
})

export const DivImg = styled('div')({
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'1rem',

})

export const Image = styled('img')({
    width:'52rem',

    [theme.breakpoints.down('md')]:{
        width:'37rem',
    },
})

export const Description = styled('div')({
    marginLeft:'6.3rem',
    marginRight:'6.3rem'
})

export const Paragraph = styled('p')({
    letterSpacing: '0.5px',
    lineHeight:'1rem',
    marginTop:'4rem',

})

export const TextDescription = styled('div')({
    letterSpacing: '0.5px',
    lineHeight:'1rem',
    marginBottom:'6.1rem',
})









