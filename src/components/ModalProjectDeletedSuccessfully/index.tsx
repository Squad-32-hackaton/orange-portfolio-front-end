import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { ModalContainer, button, circle, Title, Section } from "./styles";

export default function ModalProjectDeletedSuccessfully() {

    return (
        <Section>
            <ModalContainer>
                <Title>Projeto deletado com sucesso!</Title>
                <CheckCircleRoundedIcon sx={ circle } />
                <Button variant="contained" sx={ button }
                    
                >Voltar para Projetos</Button>
            </ModalContainer>
        </Section>

    )

}