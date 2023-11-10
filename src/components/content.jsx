import Counter from "./counter";
import HoverCounter from "./HoverCounter";
import themeContext from "./context/themecontext";
export default function Content(){
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count,increamentCount)=>
                    <themeContext.Consumer>
                    {   ({theme})=><HoverCounter count={count}  
                        // value হিসেবে theme পাঠালে theme receive করে
                        increamentCount={increamentCount} theme={theme}/> 
                    }
                    </themeContext.Consumer>
                }
            </Counter>
        </div>
    )
}