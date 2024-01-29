import { styled } from '@mui/system'
import { theme } from '../../styles/theme'

export const Section = styled('section')({
    display:'flex',
    width: '100%',
    height: '100%',
    justifyContent:'center',


    [theme.breakpoints.up('md')]:{
        width:'46%',
        justifyContent:'start',
        margin:'1rem',
    },

    [theme.breakpoints.up('lg')]:{
        width:'30%',
        justifyContent:'start',
        margin:'1rem',
    },

    [theme.breakpoints.up('xl')]:{
        width:'23%',
        justifyContent:'start',
        margin:'1rem',
    },

})

export const Aling = styled('div')({
    width:'100%',
    height:'100%',
})

export const Image = styled('img')({
    width: '19.5rem',
    display:'flex',
    margin:'auto',  

    [theme.breakpoints.up('md')]:{
        width:'100%',
        height:'100%',
    },

    [theme.breakpoints.up('lg')]:{
        width:'100%',
        height:'100%',
    },
})

export const DivForaInfos = styled('div')({
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',

    [theme.breakpoints.up('md')]:{
        width:'100%',
    },

    [theme.breakpoints.up('lg')]:{
        width:'100%',
    },
})

export const DivInfos = styled('div')({
    display:'flex',
    alignItems:'center',

    [theme.breakpoints.up('md')]:{
        width:'100%',
    },

    [theme.breakpoints.up('lg')]:{
        width:'100%',
    },
})

export const Profile = styled('img')({
    borderRadius:'90px',
    width:'1.5rem',
    height:'1.5rem',
    marginRight:'1rem',
})

export const Text = styled('h4')({

})

export const DivTags = styled('div')({
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',

    [theme.breakpoints.up('md')]:{
        display:'none',
    },

    [theme.breakpoints.up('lg')]:{
        display:'none',
    },
})

export const Tag = styled('div')({
    backgroundColor:'rgba(0, 0, 0, 0.08)',
    color:'black',
    borderRadius:'100px',
    padding:'0.75rem',
    paddingTop:'0.43rem',
    paddingBottom:'0.43rem',
    marginLeft:'0.62rem',

    [theme.breakpoints.up('lg')]:{
        padding:'0.75rem',
    },
})






