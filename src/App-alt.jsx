import { useState,useReducer } from 'react'
import React from 'react'
// import Counter from './components/counter'
// import Counter from './components/complexCounter'
// import Counter3 from './components/counter3'
import ComponentA from './components/componentA'
export const countContext=React.createContext()

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
function App() {
  const [count,dispatch]=useReducer(reducer,intialState)
  return (
    <>
      <div>
        <div>Count:{count} </div>
        <countContext.Provider value={{countDispatch:dispatch}}>
            <ComponentA/>
        </countContext.Provider>
      </div>
    </>
  )
}

export default App











