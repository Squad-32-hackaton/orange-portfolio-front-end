import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { ModalContainer, button, circle, Title } from "./styles";
import { Section } from "./styles";

export default function ModalEditSuccess() {

    return (
        <Section>
            <ModalContainer>
                <Title>Edição concluída com sucesso!</Title>
                <CheckCircleRoundedIcon sx={ circle } />
                <Button variant="contained" sx={ button }
                    
                >voltar para projetos</Button>
            </ModalContainer>
        </Section>

    )

}