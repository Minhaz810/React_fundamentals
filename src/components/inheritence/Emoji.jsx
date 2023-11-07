//This is our parent component

import React from "react";

class Emoji extends React.Component{
    addEmoji=(text,emoji)=>`${emoji} ${text} ${emoji}`
    render(overwrite){ //optional
        let text="I am the Emoji Component"
        if(overwrite){
            text=overwrite;
        }
        return (
            <div>
                {text}
            </div>
        )
    }
}
export default Emoji;


/* 
আমরা এবার অন্য একটা file বানাবো text.jsx নামে,এবং আমরা Emoji class টাকে extend করার চেষ্টা করবো।
*/