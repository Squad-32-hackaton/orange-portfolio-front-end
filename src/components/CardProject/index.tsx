import { Section, DivInfos, Profile, Tag, Text, Aling } from "./styles";
import Card from '../../assets/img/CardProject.png'
import { Image } from './styles'
import ProfilePhoto from '../../assets/img/ProfileImage.png'
import { Button } from "@mui/material";

export default function CardProject() {
    return (
        <Section>
            <Aling>
            <Image src={Card} />
            <DivInfos>
                <DivInfos>
                    <Profile src={ProfilePhoto} />
                    <Text>Bianca Martin . 02/24</Text>
                </DivInfos>
                <DivInfos>
                    <Tag>UX</Tag>
                    <Tag>Web</Tag>
                </DivInfos>
            </DivInfos>
            </Aling>
        </Section>

    )

}