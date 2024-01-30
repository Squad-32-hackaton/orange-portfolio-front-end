import { SxProps } from "@mui/material";
import { theme } from "../../styles/theme";

export const baseStyle ={
  padding:'2rem',


  [theme.breakpoints.up('md')]: {
    display:'flex',
    justifyContent:'space-between',
    padding:'0',
  }

}

export const boxInputs = {

  [theme.breakpoints.up('md')]: {
    marginTop:'15rem',
    marginLeft:'5rem',
  }

}

export const cardMediaStyles = {
  width: '32.8rem',
  height:'51.4rem',
  objectFit: 'cover',
  marginBottom: '0.05rem',
  display:'none',

  [theme.breakpoints.up('md')]: {
    display:'block',
    marginLeftt:'1rem',
  }

};

export const IconButtonStyles = {
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

export const boxGoogle = {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  marginTop:'4rem',
}

export const typographyTitleStyles = {
  fontSize:'1.5rem',
  marginBottom:'2rem',
}

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

