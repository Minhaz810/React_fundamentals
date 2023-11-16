import React from "react";
import { useState,useEffect } from "react";
import MyComponent from "./Components/MyComponentClass";
import MyComponent2 from "./Components/Mycomponents";


export default function App(){
    const [show,setShow]=useState(true)
    return(
        <div> 
          {show && <MyComponent2/>}
          <br />
          <button onClick={()=>setShow((prevState)=>!prevState)}>{show?'Hide Post':'Show Post'}</button>
        </div>
      )
  
}










