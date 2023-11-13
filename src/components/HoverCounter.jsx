import React from "react"
export default function HoverCounter({count,increamentCount,theme}){
    const style=theme==='dark'?{backgroundColor:'#000000', color:'#ffffff'}:null;
    return (
    <div>
        <h1 onMouseOver={increamentCount} style={style}>
            Hovered {count} times
        </h1>
    </div>
    )
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
