import WithCounter from "./HOC/withCounter"
const ClickCounter=(props)=>{
    const {count,increamentCount}=props
    return (
    <div>
        <button type="button" onClick={increamentCount}>
            Clicked {count} times
        </button>
    </div>
    )
}
export default WithCounter(ClickCounter)

/* 
this.setState((state)=>({
            count:state.count+1 //এখানে state টা হচ্ছে আমাদের previous state যেখনে counter এর ভ্যালু 0 ছিলো
        })
        )
        this.setState((state)=>()) এভাবে করতে হবে। (state)=>() bracket না দিলে কাজ করবে না।

==>setState is called with a function that takes the previous state as its argument.

==>The function returns an object with the updated state, where count is incremented by 1. {This object is wrapped in parentheses to indicate that it's a single object literal.}

==>The updated state is then passed to setState for updating.

With this corrected code, when you call this.incrementCount(), it should properly increment the count property in the component's state.


import React from "react";

class ClickCounter extends React.Component{
    state={
        count:0,
    }
    increamentCount=()=>{
        this.setState((state)=>({
            count:state.count+1 //এখানে state টা হচ্ছে আমাদের previous state যেখনে counter এর ভ্যালু 0 ছিলো
        })
        )
    }
    render(){
        const {count}=this.state
        return(
            <div>
                <button type="button" onClick={this.increamentCount}>
                    Clicked {count} times
                </button>
            </div>
        )
    }
}
export default ClickCounter;

আমরা Clickcounter থেকে state গুলো যেহেতু HOC তে নিয়ে গিয়েছি,তাই আমরা Click কে একটা functional component বানিয়ে ফেলি।
*/ 