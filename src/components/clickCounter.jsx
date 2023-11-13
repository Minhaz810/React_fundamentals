import React from "react"
export default class ClickCounter extends React.Component{
    render(){
        const {count}=this.props
        const {increamentCount}=this.props
    return (
    <div>
        <button type="button" onClick={increamentCount}>
            Clicked {count} times
        </button>
    </div>
    )
    }
}

/* 
আমাদের কে যদি nested comonent দেয়া থাকে,তাহলে parent থেকে last child এ props পাঠাতে হলে 
বাকী component গুলোর মধ্যে দিয়েও পাঠাতে হয়,যেগুলাতে আসলে props এর দরকার নাই। এই জিনিসটার একটা 
solution ছিলো higher order component,কিন্তু আরেকটা solution হচ্ছে,Reneder props
*/