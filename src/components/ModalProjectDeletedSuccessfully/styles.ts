import { styled } from '@mui/system'

export const ModalContainer = styled('div')({
    backgroundColor: 'white',
    width: '85%',
    display:'flex',
    alignItems:'center',
    flexDirection: 'column',
    paddingBottom: '1rem',
    paddingTop: '1rem',
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
    alignItems:'center'
})
