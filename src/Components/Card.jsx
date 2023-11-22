import nerdImage from '../assets/images/illustration.png'
import Button from "./Button"
import { Tag } from './styles/Container.styles'
import { StyledCard } from './styles/Container.styles'
import { Content } from './styles/Container.styles'
import { H1 ,P,ButtonContainer,Image} from './styles/Container.styles'
import { StyledTitle } from './styles/custom.styles'
function Card(){
    console.log(P)
    return(
        <div>
            <div className="changeButton">
                <button>Change Theme</button>
            </div>
            <StyledCard>
                <Content>
                    <Tag color='#0c1434'>
                        EXCLUSIVE
                    </Tag>
                    <H1><StyledTitle text="React Styled Component"/></H1>
                    <P>
                        Exclusive React Js Tutorial on Styled Components where you will 
                        learn why we nedd this and how to use it.
                    </P>
                    <ButtonContainer>
                        <Button link="https://lwsbd.link/rsc" text="Watch now" />
                        <Button link="https://lwsbd.link/react" text="Github repo" />

                    </ButtonContainer>
                    
                </Content>
                <Image src={nerdImage} alt="Nerd" width="300px" />
            </StyledCard>
            
        </div>
    )
}
export default Card