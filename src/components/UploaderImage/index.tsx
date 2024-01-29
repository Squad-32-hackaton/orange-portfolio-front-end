import { Collections } from "@mui/icons-material"
import { projectsContainer, collectionStyles } from "./styles"
import { Box, Typography } from "@mui/material"

type TextProps = {
  type: 'title' | 'subTitle'
  content: string
}

export interface UploaderImageProps {
  texts: TextProps []
  margin?: boolean
}

export default function UploaderImage({ texts } :UploaderImageProps) {
  return (
    <Box sx={projectsContainer}>

     <Collections sx={ collectionStyles }/>

     {texts && texts.map((text,_) => {
       return (
       <Typography key={_}
         sx={{opacity:'0.6', paddingLeft:'1.3rem', fontSize: text.type ==='title' ? '1rem' : '0.87rem' }}>
         {text.content}
       </Typography> 
       )
      })
     }
     
    </Box>
  )
}
