import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { ModalContainer, button, circle, Title } from "./styles";
import { Section } from "./styles";

export default function ModalAddSuccess() {

    return (
        <Section>
            <ModalContainer>
                <Title>Projeto adicionado com sucesso!</Title>
                <CheckCircleRoundedIcon sx={ circle } />
                <Button variant="contained" sx={ button }
                    
                >voltar para projetos</Button>
            </ModalContainer>
        </Section>

    )

}