import { useEffect ,useRef} from "react"
import Input from "./input";

export default function Form(){
    const inputField=useRef(null)
    useEffect(()=>{
        //dom element loaded
        inputField.current.focus();
    },[])
    return(
        <div>
            <p>
                <Input type="input" placeholder="Enter Name" ref={inputField}/>
            </p>
        </div>
    )
}