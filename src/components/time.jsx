import { useState,useEffect,useRef} from "react";
function Time(){
    const [date,setDate]=useState(new Date())
    const reference=useRef()
    const tick=()=>{
        setDate(new Date())
    }
     useEffect(()=>{
       reference.current= setInterval(tick,1000)


       return()=>{
            clearInterval(reference.current)
       }

        
     },[])
    return(
        <div>

            {date.toLocaleTimeString()}
            <br />
            <button onClick={()=>clearInterval(reference.current)}>Stop</button>
        </div>
    )
}
export default Time