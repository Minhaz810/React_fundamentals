import { useState,useEffect } from "react";

function MyComponent2(){
    const [count,setCount]=useState(0)
    const [date,setDate]=useState(new Date())

    const addClick=()=>{
        setCount((prevCount)=>prevCount+1)
    }
    useEffect(()=>{
        console.log(`Rendered`)
        document.title=`Clicked ${count} Time`
    },[count])
    const tick=()=>{
        console.log('clock Ticking')
        setDate(new Date())
    }
    useEffect(()=>{
        console.log('Starting Timer')
        const interval=setInterval(tick,1000);
        return ()=>{
            console.log(`Component Unmounted`)
            clearInterval(interval)
        }
    },[]);
    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>{count}</p>
            <button type="button" onClick={addClick}>Click</button>
        </div>
    )
}
export default MyComponent2