import { Section, DivInfos, DivForaInfos, Profile, DivTags, Tag, Text, Aling } from "./styles";
import Card from '../../assets/img/CardProjectLarge.png'
import { Image } from './styles'
import ProfilePhoto from '../../assets/img/ProfileImage.png'

export default function CardProject() {
    return (
        <Section>
            <Aling>
                <Image src={Card} />
                <DivForaInfos>
                    <DivInfos>
                        <Profile src={ProfilePhoto} />
                        <Text>Bianca Martin . 02/24</Text>
                    </DivInfos>
                    <DivTags>
                        <Tag>UX</Tag>
                        <Tag>Web</Tag>
                    </DivTags>
                </DivForaInfos>
            </Aling>
        </Section>

    )

}