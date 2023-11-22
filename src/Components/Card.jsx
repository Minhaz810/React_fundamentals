import nerdImage from '../assets/images/illustration.png'
import Content from "./Content"
import Button from "./Button"
import Tag from "./Tag"
import Image from "./image"
function Card(){
    return(
        <div>
            <div className="changeButton">
                <button>Change Theme</button>
            </div>
            <div className="card">
                <Content>
                    <Tag text="EXCLUSIVE"/>
                    <h1>React Styled Component</h1>
                    <p>
                        Exclusive React Js Tutorial on Styled Components where you will 
                        learn why we nedd this and how to use it.
                    </p>
                    <div className="buttons">
                        <Button link="https://lwsbd.link/rsc" text="Watch now" />
                        <Button link="https://lwsbd.link/react" text="Github repo" />

                    </div>
                    
                </Content>
                <Image src={nerdImage} alt="Nerd" width="300px" />
            </div>
            
        </div>
    )
}
export default Card