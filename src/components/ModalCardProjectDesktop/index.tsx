import { Section, Top, Profile, Photo, Name, Data, Title, Tags, Tag, Paragraph, DivPhoto, Description, DivNameDate, TextDescription, ModalContainer, Image, DivImg, styleIcon, ButtonClose } from "./styles";
import ProfilePhoto from '../../assets/img/ProfileImage.png'
import CloseIcon from '@mui/icons-material/Close';
import ImageProject from '../../assets/img/CardProjectLarge.png'

export default function ModalCardProjectDesktop() {

    return (
        <Section>
            <ModalContainer>
                <ButtonClose><CloseIcon sx={styleIcon} /></ButtonClose>
                <Top>
                    <Profile>
                        <DivPhoto>
                            <Photo src={ProfilePhoto} />
                        </DivPhoto>
                        <DivNameDate>
                            <Name>Bianca Martin </Name>
                            <Data>02/24</Data>
                        </DivNameDate>
                    </Profile>
                    <Title> Ecommerce One Page</Title>
                    <Tags>
                        <Tag>UX</Tag>
                        <Tag>Web</Tag>
                    </Tags>
                </Top>

                <DivImg>
                    <Image src={ImageProject} />
                </DivImg>

                <Description>
                    <Paragraph>Temos o prazer de compartilhar com vocês uma variação do 
                        nosso primeiro recurso gratuito.
                        É um modelo de IA. Tentamos redesenhar uma versão 
                        mais minimalista do nosso primeiro projeto.</Paragraph>
                    <TextDescription> Download <br />
                        <a href="https://gumroad.com/products/wxCSL">https://gumroad.com/products/wxCSL</a>
                    </TextDescription>
                </Description>




            </ModalContainer>
        </Section>

    )

}