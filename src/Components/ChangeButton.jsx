import { useContext } from "react"
import { ThemeContext } from "../App"
import { ChangeButtonContainer } from "./styles/Container.styles"
export default function ChangeButton(){
    const context=useContext(ThemeContext)
    const {Change,theme}=context
    return(
        <div>
            <div>
                    <ChangeButtonContainer color={theme.type=="dark"?"#000000":"#ffffff"} backgroundColor={theme.type=="dark"?"#ffffff":"#000000"} onClick={Change}>{theme.type=="dark"?"Light":"Dark"}</ChangeButtonContainer>
            </div>
        </div>
    )
}