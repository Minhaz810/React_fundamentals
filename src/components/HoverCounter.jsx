import WithCounter from "./HOC/withCounter"
const HoverCounter=(props)=>{
    const {count,increamentCount}=props
    return (
    <div>
        <h1 onMouseOver={increamentCount}>
            Hovered {count} times
        </h1>
    </div>
    )
}
export default WithCounter(HoverCounter)


/* 
ধরা যাক client আমার কাছে কিছুদিন পর আরেকটা compnent চাইলো যে একটা inputfield দিতে হবে,যেটার মধ্যে কয়বার Type 
করা হয়েছে সেটার count রাখতে হবে। সেই ক্ষেত্রে আমরা চাইলেই পারি নতুন component বানাতে,কিন্তু বারবার এরকম করতে থাকলে
আমাদের project আর scalable থাকবে না।

একটা probable solution হচ্ছে আমরা Lifting State Up method অনুযায়ী একটা parent এই state গুলাকে দিতে পারি,
কিন্তু সেই ক্ষেত্রে আমাদের দুইটা state maintain করতে হবে,একটা হচ্ছে ClickCount এবং আরেকটা হচ্ছে HoverCount.
এবং আমাদের method ও দুইটা লাগবে,এরপর আমরা সেগুলোকে props আকারে পাঠাতে পারবো আমাদের component এ।

কিন্তু প্রবলেম টা হচ্ছে,এক্ষেত্রে আমাদের ClickCounter ও HoverCounter দুইটাই আছে সরাসরি APP এর child হিসেবে,কিন্তু যদি এমন হতো,

hoverCounter টা আরো দুইটা component এর মধ্যে nested,সেই ক্ষেত্রে props যদি আমরা App থেকে HoverCounter এ পাঠাতে চেতাম তাহলে আরো
দুইটা Component এর ভেতর দিয়ে props গুলোকে Passed হতে হতো।

এখানেই চলে আসে Higher Order Component

React এর Definition অনুযায়ী Higher-Order Component হচ্ছে একটা function যেটা একটা component
কে parameter হিসেবে নিবে,এবং return করে দিবে একটা নতুন component কে।

const NewComponent=HigherOrderComponent(OriginalComponent)


import React from "react";

class HoverCounter extends React.Component{
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
                <h1 onMouseOver={this.increamentCount}>
                    Hovered {count} Times
                </h1>
            </div>
        )
    }
}
export default HoverCounter;

*/