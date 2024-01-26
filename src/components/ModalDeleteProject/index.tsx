import { Modal, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { ModalContainer } from "./styles";
import { Paragraph } from "./styles";
import { Section } from "./styles";
import { Buttons } from "./styles";
import ModalProjectDeletedSuccessfully from "../ModalProjectDeletedSuccessfully";
import { useState } from "react";

interface ModalDeleteProjectProps {
    handleChangeState: () => void
}

export default function ModalDeleteProject({ handleChangeState }: ModalDeleteProjectProps) {

    const [openModalDelete, setOpenModalDelete] = useState(false)

    function handleSuccessfullyDelete() {
        setOpenModalDelete(!openModalDelete)
        console.log('openModalDelete', openModalDelete)
    }

    return (
        <>
            <Section>
                <ModalContainer >
                    <Typography variant="h5" sx={{ textAlign: 'start', paddingLeft: '1rem' }}>Deseja Excluir?</Typography>
                    <Paragraph>Se você prosseguir irá excluir o projeto do seu portfólio</Paragraph>
                    <Buttons>
                        <Button variant="contained" sx={{ backgroundColor: '#FF5522', marginRight: '1rem' }}
                            onClick={() => handleSuccessfullyDelete()}
                        >Excluir</Button>
                        <Button variant="contained" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', color: 'rgba(0, 0, 0, 0.38)' }}
                            onClick={() => handleChangeState()}
                        >Cancelar</Button>
                    </Buttons>
                </ModalContainer>

            </Section>
            <Modal children={<ModalProjectDeletedSuccessfully />} open={openModalDelete} />
        </>
    )

}