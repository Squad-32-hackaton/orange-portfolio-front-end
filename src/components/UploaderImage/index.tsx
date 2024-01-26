import { Collections } from "@mui/icons-material"
import { ProjectsContainer } from "./styles"
import { Typography } from "@mui/material"

type TextProps = {
  type: 'title' | 'subTitle'
  content: string
}

export interface UploaderImageProps {
  texts: TextProps []
  margin?: boolean
}

export default function UploaderImage({texts}:UploaderImageProps) {
  return (
    <ProjectsContainer sx={{width:'100%'}}>
     <Collections sx={{width: '2.8rem', height:'2.8rem', m:"0 auto"}}/>

     {texts && texts.map((text,_) => {
       return (
       <Typography key={_}
         sx={{opacity:'0.6', paddingLeft:'1.3rem', fontSize: text.type ==='title' ? '1rem' : '0.87rem' }}>
         {text.content}
       </Typography> 
       )
      })
     }
     
    </ProjectsContainer>
  )
}
