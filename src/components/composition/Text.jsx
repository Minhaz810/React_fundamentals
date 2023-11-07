function Text({addEmoji,addBracket}){
    let text="This is Javascript"
    

    if(addEmoji){
        text=addEmoji(text,'👿')
    }
    if(addBracket){
        text=addBracket(text)
    }
    
    return <div>{text}</div> //যদি eddEmoji থাকে তাহলে call করো,নাহয় Text return করো।
}


/* 
এখানে addEmoji একটা Text component এর একটা props

*/
export default Text;