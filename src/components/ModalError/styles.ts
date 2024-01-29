import { styled } from '@mui/system'
import { theme } from '../../styles/theme'

export const ModalContainer = styled('div')({
    backgroundColor: 'white',
    width: '19.5rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '1rem',
    paddingTop: '1rem',

    [theme.breakpoints.up('md')]: {
        width: '21.9rem',
        paddingTop: '0',
    },

    [theme.breakpoints.up('xl')]: {
        width: '21.9rem',
        paddingTop: '0',
    },
})

export const Paragraph = styled('p')({
    textAlign: 'start',
    paddingLeft: '1rem',
})

export const Section = styled('section')({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1.5rem',
})


export const Title = styled('h5')({
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontsize: '1.5rem',
    letterSpacing: '0.5px',
    marginLeft: '2rem',
    marginRight: '2rem',

    [theme.breakpoints.up('md')]: {
        paddingTop: '1rem',
    },

    [theme.breakpoints.up('xl')]: {
        paddingTop: '1rem',
    },
})

export const circle = {
    color: 'red',
    fontSize: '2.5rem',
    margin: 'auto',
    marginBottom: '1rem',
}

export const button = {
    backgroundColor: '#FF5522',
    marginBottom: '0.5rem',
    width: '15rem',
}