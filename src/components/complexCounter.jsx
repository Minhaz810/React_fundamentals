import { useReducer } from "react"

const intialState={
    counter:500,
    counter2:500,
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment1':
            return {...state,counter:state.counter+action.value};
        case 'decrement1':
            if(state.counter==0){
                return {...state,counter:state.counter};
            }else{
                return {...state,counter:state.counter-action.value};
            }
        case 'increment5':
            return {...state,counter2:state.counter2+action.value};
        case 'decrement5':
            if(state.counter2==0){
                return {...state ,counter2:state.counter2};
            }else{
                return {...state, counter2:state.counter2-action.value};
            }
        default:
                return state
        }
}
function Counter(){
    const [count,dispatch]=useReducer(reducer,intialState)
    console.log(count)
    return(
        <>
        <div>
            <div>Count: {count.counter}</div>
            <button onClick={()=>dispatch({type:'increment1',value:1})}> Increment by 1</button>
            <button onClick={()=>dispatch({type:'decrement1',value:1})}> Decremenet by 1</button>
        </div>

        <div>
            <div>Count: {count.counter2}</div>
            <button onClick={()=>dispatch({type:'increment5',value:5})}> Increment by 5</button>
            <button onClick={()=>dispatch({type:'decrement5',value:5})}> Decremenet by 5</button>
        </div>
        </>
    )
}
export default Counter