import Button from '@mui/material/Button';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { ModalContainer, button, circle, Title, Section } from "./styles";

export default function ModalProjectDeletedFail() {

    return (
        <Section>
            <ModalContainer>
                <Title>Houve um erro ao deletar o projeto!</Title>
                <DangerousIcon sx={ circle } />
                <Button variant="contained" sx={ button }
                    
                >Voltar para Projetos</Button>
            </ModalContainer>
        </Section>

    )

}