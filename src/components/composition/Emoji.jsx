import React from "react";

class Emoji extends React.Component{
    addEmoji=(text,emoji)=>`${emoji} ${text} ${emoji}`
    render(){ //optional
        return this.props.children({addEmoji:this.addEmoji})
    }
}
export default Emoji;


/* 
return this.props.children লিখা মানে, Emoji এর children এর ভেতর Text নামে যেই component টা আছে সেটাকে return করে দেয়া।

Text component টাকে তো পেলাম,কিন্তু যদি Text component এ আমরা যাই তাহলে দেখবো,\

function Text({addEmoji}){
    let text="This is Javascript"
    return (addEmoji?addEmoji(text,'👿'):text)
}

Text component টা props থেকে addEmoji receive করে,কিন্তু আমি তো শুধু Text component টা return করেছি 
"return this.props.children" এই লিখার মাধ্যমে, addEmoji তো পাঠাই নি।

==> যদি এটা লিখি
    return this.props.children({addEmoji:this.addEmoji})

    তার মানে addEmoji object টা destructure হয়ে Text function টা receive করবে।

==>But আমাদের Text children তো একটা component,সে তো fucntion না। 
    component তো parameter receive করে না,সে recieve করে props.

    তাই আমরা যেটা করতে পারি, 

    app.jsx এ :

    <h1><Emoji>{({addEmoji})=><Text addEmoji={addEmoji}/>}</Emoji></h1>
    করতে পারি।

    ({addEmoji})=> 

    এটা আমাদের {addEmoji:this.addEmoji} object থেকে addEmoji কে destructure করে নিয়ে আসবে।

    <Text addEmoji={addEmoji}/>

    Text Component এর addEmoji props এ এটাকে পাঠিয়ে দেয়া হবে।

    এবং

    function Text({addEmoji}){
    let text="This is Javascript"
    return (addEmoji?addEmoji(text,'👿'):text)

    এখানে 
    function Text({addEmoji})

    এটার মানে হচ্ছে Text component এর Props থেকে Destructure করে addEmoji কে নিয়ে আসো।
}
*/