import { useContext } from "react"
import { countContext } from "../App-alt"

export default function ComponentB(){
    const counter=useContext(countContext)
    console.log(counter)
    return(
        <div>
            <button type="button" onClick={()=>counter.countDispatch('increment')}>Increment</button>
            <button type="button" onClick={()=>counter.countDispatch('decrement')}>Decrement</button>
        </div>
    )
}