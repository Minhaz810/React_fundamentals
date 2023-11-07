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


/* 
ধরা যাক client আমার কাছে কিছুদিন পর আরেকটা compnent চাইলো যে একটা inputfield দিতে হবে,যেটার মধ্যে কয়বার Type 
করা হয়েছে সেটার count রাখতে হবে। সেই ক্ষেত্রে আমরা চাইলেই পারি নতুন component বানাতে,কিন্তু বারবার এরকম করতে থাকলে
আমাদের project আর scalable থাকবে না।

একটা probable solution হচ্ছে আমরা Lifting State Up method অনুযায়ী একটা parent এই state গুলাকে দিতে পারি,
কিন্তু সেই ক্ষেত্রে আমাদের দুইটা state maintain করতে হবে,একটা হচ্ছে ClickCount এবং আরেকটা হচ্ছে HoverCount.
এবং আমাদের method ও দুইটা লাগবে,এরপর আমরা সেগুলোকে props আকারে পাঠাতে পারবো আমাদের component এ।
*/