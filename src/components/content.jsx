import Counter from "./counter";
import HoverCounter from "./HoverCounter";
import themeContext from "./context/themecontext";
import React from "react";
import { useContext } from "react";
export default function Content(){
   const context=useContext(themeContext)
   const {theme,changeTheme}=context
    console.log("Content Rendered")
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count,increamentCount)=>
                  
                    <HoverCounter count={count}  
                    increamentCount={increamentCount} theme={theme} changeTheme={changeTheme}/> 
                    
                   
                }
            </Counter>
        </div>
        )
    
}

