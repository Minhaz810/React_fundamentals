import { useReducer } from "react"

const intialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            if(state==0){
                return state
            }else{
                return state-1
            }
        default:
            return state
    }
}
function Counter(){
    const [count,dispatch]=useReducer(reducer,intialState)
    return(
        <>
        <div>Count: {count}</div>
        <button onClick={()=>dispatch('increment')}> Increment</button>
        <button onClick={()=>dispatch('decrement')}> Decremenet</button>
        </>
    )
}
export default Counter