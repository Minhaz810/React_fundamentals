import React from "react"
export default function HoverCounter(props){
   const {count,increamentCount,theme,changeTheme}=props;
    const style=theme==='dark'?{backgroundColor:'#000000', color:'#ffffff'}:null;
    let x=''
    if(theme=='dark'){
        x='Light'
    }else{
        x='Dark'
    }
    console.log("HoverCounter Rendered")
    return (
    <div>
        <h1 onMouseOver={increamentCount} style={style}>
            Hovered {count} times
        </h1>
        <button type="button" onClick={changeTheme}>{`Change To ${x}`}</button>
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
