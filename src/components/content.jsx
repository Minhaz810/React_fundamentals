import Counter from "./counter";
import HoverCounter from "./HoverCounter";
export default function Content(){
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count,increamentCount)=>
                <HoverCounter count={count} increamentCount={increamentCount}/> }
            </Counter>
        </div>
    )
}