import { Button, Stack, Typography } from "@mui/material";
import {
  ProjectModalMain,
  ProjectModalContainer,
  ProjectModalContent,
} from "./styles";
import TextField from "@mui/material/TextField";
import UploaderImage from "../UploaderImage";

type ProjectModalProps = {
  handleClose: () => void
}

export default function ProjectModal({ handleClose }: ProjectModalProps) {
  return (
    <ProjectModalMain>
      <ProjectModalContainer>
        <ProjectModalContent>
          <Typography
            sx={{
              color: "#515255",
              fontSize: "1.5rem",
            }}
          >
            {" "}
            Adicionar projeto
          </Typography>

          <TextField placeholder="Titulo" />
          <TextField placeholder="Tags" />
          <TextField placeholder="Descrição" multiline minRows={3} />

          <Typography
            variant="body1"
            sx={{
              color: "#515255",
              letterSpacing: "0.15px",
              lineHeight: "16px",
            }}
          >
            Selecione o conteúdo que você deseja fazer upload
          </Typography>

          <UploaderImage
            texts={[
              {
                content: "Compartilhe seu talento com milhares de pessoas",
                type: "subTitle",
              },
            ]}
          />

          <Typography variant="body1" color="#00000091">
            Visualizar publicação
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between" }}
          >
            <Button variant="contained" sx={{ width: "45%" }} size="large">
              Salvar
            </Button>
            <Button
              variant="contained"
              sx={{ width: "45%", backgroundColor: "#00000061" }}
              size="large"
              onClick={() => handleClose()}
            >
              Cancelar
            </Button>
          </Stack>
        </ProjectModalContent>
      </ProjectModalContainer>
    </ProjectModalMain>
  );
}
