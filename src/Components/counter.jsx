import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0)
    let i=0;
    const addfive=()=>{
        while(i<5){
            setCount((prevState)=>prevState+1)
            i++
        }
    }

    return(
        <div>
            <p>{count}</p>
            <button type="button" onClick={()=>setCount((prevState)=>prevState+1)}>Add 1</button>
            <br />
            <br />
            <button type="button" onClick={addfive}>Add 5</button>
        </div>
        
    )
}
export default Counter