import React from "react"
export default class HoverCounter extends React.Component{
   


    render(){
        const {count}=this.props
        const {increamentCount}=this.props
    return (
    <div>
        <h1 onMouseOver={increamentCount}>
            Hovered {count} times
        </h1>
    </div>
    )
    }
}

/* 
<counter>
        {(count,increamentCount)=>
        <HoverCounter count={count} increamentCount={increamentCount}/> }
<counter/

অর্থ্যাৎ ,আমাদের counter এর props হচ্ছে count আর increment count.
destructure করে আনার পর 
count={count(অর্থ্যাৎ counter থেকে যেই parameter পেয়েছে)}
incrementCount={increamentCount (অর্থ্যাৎ counter থেকে যেই parameter পেয়েছে)}
*/
