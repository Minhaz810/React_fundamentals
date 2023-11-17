import { forwardRef } from "react"
function Input({type,placeholder},ref){
    return(
        <input type={type} placeholder={placeholder} ref={ref}/>
    )
}
const forwarded_Input=forwardRef(Input)
export default forwarded_Input