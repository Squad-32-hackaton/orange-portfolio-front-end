import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { ModalContainer } from "./styles";
import { Section } from "./styles";
import { useNavigate } from "react-router-dom";

interface ModalAddSuccessProps {
    handleChangeState: () => void
}

export default function ModalAddSuccess() {

    const navigation: any = useNavigate();

    function goBack(){
        navigation("/home");
    }


    return (
        <Section>
            <ModalContainer>
                <Typography variant="h5" sx={{ marginBottom: '1rem', marginTop: '0.5rem', textAlign: 'center', }}>Projeto adicionado com sucesso!</Typography>
                <CheckCircleRoundedIcon sx={{ color: 'green', fontSize: '2.5rem', margin: 'auto', marginBottom: '1rem' }} />
                <Button variant="contained" sx={{ backgroundColor: '#FF5522', marginBottom: '0.5rem', width: '15rem' }}
                    onClick={() => goBack()}
                >voltar para projetos</Button>
            </ModalContainer>
        </Section>

    )

}