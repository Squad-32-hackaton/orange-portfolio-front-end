import { createTheme } from "@mui/material/styles";
// import '@fontsource/roboto'

declare module  "@mui/material/Button" {
  interface ButtonPropsColor {

  }

}

export const theme = createTheme({
 palette: {
   primary: {
     light: '#FF8833',
     main: '#FF8833',
     dark: '#002884',
     contrastText: '#fff', 
   },
   secondary: {
     light: '#ff7961',
     main: '#f44336',
     dark: '#ba000d',
     contrastText: '#000',
   },
   background: {
    default:'#fff',
   },   
 },
 typography: {
  fontFamily:"roboto"
 },
 breakpoints: {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1280,
    xl: 1560,
  },
},
});