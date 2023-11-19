import { useReducer } from "react"

const intialState=0
const initialState2=5;
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
function Counter3(){
    const [count,dispatch]=useReducer(reducer,intialState)
    const [count2,dispatch2]=useReducer(reducer,initialState2)
    return(
        <>
        <div>
            <div>Count: {count}</div>
            <button onClick={()=>dispatch('increment')}> Increment</button>
            <button onClick={()=>dispatch('decrement')}> Decremenet</button>
        </div>

        <div>
            <div>Count: {count2}</div>
            <button onClick={()=>dispatch2('increment')}> Increment</button>
            <button onClick={()=>dispatch2('decrement')}> Decremenet</button>
        </div>
        </>
    )
}
export default Counter3