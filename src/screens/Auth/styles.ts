import { SxProps } from "@mui/system";

export const ContainerStyles: SxProps = {
    backgroundColor: 'white',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  export const GridNoneStyles : SxProps = {
    xs: 'none', 
    sm: 'block'
  };

  export const BoxStyles : SxProps = {
    margin: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  export const CardMediaStyles : SxProps = {
    width: '100%',
    objectFit: 'cover',
    marginBottom: '0.05rem',
  };

  export const TypographyTitleStyles : SxProps = {
    fontFamily: 'Roboto',
    fontSize: '1.875rem',
    fontWeight: 400,
    lineHeight: '2.5rem',
    letterSpacing: '0em',
    textAlign: 'center',
    padding: '1rem'
  };

  export const IconButtonStyles : SxProps = {
    backgroundColor: 'white',
    color: '#000000',
    '&:hover': {
    backgroundColor: '#eeeeee',
    },
    width: '12.5rem',
    height: '1.875rem',
    marginTop: '1rem',
    marginBottom: '1rem',    
    padding: '1rem',
    gap: '0.5rem',
    textAlign: 'center',
  };

  export const GridStyles : SxProps = {
    width: '100%',
    height: '16.938rem',
    top: '22.5rem',
    left: '39.25rem',
    padding: '0px 0px 0.188rem 0px',
  };

  export const LinkStyles : SxProps = {
    mt: '1rem',
    display: 'block',
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1rem',
    letterSpacing: '0.094rem',
    color: '#818388',
    padding: '0',
    textDecoration: 'none',
  };

  export const Styles : SxProps = {
    
  };


