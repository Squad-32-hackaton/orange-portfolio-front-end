import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { ModalContainer } from "./styles";
import { Section } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ModalProjectDeletedSuccessfully() {

    const navigation: any = useNavigate();

    function goBack(){
        navigation("/home");
        console.log('teste123')
    }


    return (
        <Section>
            <ModalContainer>
                <Typography variant="h5" sx={{ marginBottom: '1rem', marginTop: '0.5rem', textAlign: 'center', }}>Projeto deletado com sucesso!</Typography>
                <CheckCircleRoundedIcon sx={{ color: 'green', fontSize: '2.5rem', margin: 'auto', marginBottom: '1rem' }} />
                <Button variant="contained" sx={{ backgroundColor: '#FF5522', marginBottom: '0.5rem', width: '15rem' }}
                    onClick={() => goBack()}
                >Voltar para Projetos</Button>
            </ModalContainer>
        </Section>

    )

}