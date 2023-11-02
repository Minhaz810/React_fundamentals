import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currentChange}= this.props //this.props এর change এর ভ্যালু currentChange এর ভেতর assign হবে 
        const {change: nextChange} =nextProps;
        if(currentChange===nextChange){
            return false
        }else{
            return true
        }
    }
    render(){
        console.log('button component rendered')
        const {change,locale} =this.props
        return(
            <button onClick={()=>change(locale)}>Click Here</button>
        )
    }
}

export default Button;

/* 
    যেহেতু clock component এর ভেতর Button compnonent use করার সময় আমি তাকে 
    তাকে আমি change নামে একটা props দিয়েছি সেটাকে
    <button onClick={this.props.change}>Click Here</button> 
    এভাবে call করতে পারি।

    এখানে মূলত যা যা হচ্ছে,

    ==> Clock component এর ভেতর যেই Button component কে call করা হয়েছে সে change নামে একটা props নিয়েছে।

    ==> change props টার ভিতরে handleclick নামে একটা function ছিলো। যাকে আমরা .bind এর মাধ্যমে parameter দিয়েছি "bn-bd",

        অর্থ্যাৎ Button Compnent এর ভেতর implicitly এটা থাকবে,
        props:{
            change: {this.handleClick.bind(this,'bn-BD')}
        }

    ==> change টাকে Button class এর ভেতর এভাবে আমরা call করেছি {this.props.change}

    ==> চাইলে array destructure করেও call করা যেতো।
        
        const {change}=this.props

        props থেকে change টা বের হয়ে change নামের variable এ assign হয়ে যাবে।

    ==> clock.jsx,button.jsx আর main.jsx এর রেন্ডারে যদি আমরা ৩ টা console.log() ফাংশন লিখি,এবং চেক করি,
    তাহলে দেখবো ঘড়ির টাইম চেইঞ্জ হওয়ার সাথে সাথে clock আর button component বারবার রেন্ডার হচ্ছে। কিন্তু বাটন তো আমাদের 
    বারবার রেন্ডার করার দরকার নাই।

    ==>shouldComponentUpdate() নামে একটা lifecycle hook আছে যেটা button কে বার বার rerender হওয়া থেকে ঠেকাবে।

    ==>shouldComponentUpdate(nextProps,nextState){

        //nextprops= পরের props এ সে কি পেতে যাচ্ছে
        //nextState= পরের State এ সে কি পেতে যাচ্ছে

        //nextprops আর current props compare করে আমরা যাতে বলতে পারি button render হওয়া উচিত নাকি না
    }

    ==>
    shouldComponentUpdate(nextProps){
        const {change: currentChange}= this.props //this.props এর change এর ভ্যালু currentChange এর ভেতর assign হবে 
        const {change: nextChange} =nextProps;
        if(currentChange===nextChange){
            return false
        }else{
            return true
        }
    }

    এটা করার পরেও button re-render হবে। কারণ কি?
    clock.jsx এ আমরা লিখেছিলাম 

    <Button change={this.handleClick.bind(this, 'bn-BD')}/>
    

    bind কিন্তু আমার handleClick function টাকে নতুন করে update করে ফেলে,অর্থ্যাৎ প্রত্যেকবার handleClick নামে seperate function
    call হচ্ছে। আর nextProps হিসেবে নতুন ফাংশনের Props পাচ্ছে।

    even :

    <Button change={()=>this.handleClick.bind('bn-BD')}/>

    এভাবে দিলেও আসলে হবে না

    solution:

    best practice হচ্ছে, function reference পাঠানোর সময় parameter আমরা পাঠাবোই না।

    <Button change={this.handleClick} locale="en-US"/>

    পরে আমরা locale টাকে recieve করবো।

    render(){
        console.log('button component rendered')
        const {change,locale} =this.props
        return(
            <button onClick={()=>change(locale)}>Click Here</button>
        )
    }

    এবার যদি আমরা ouput দেখি,তাহলে দেখবো button টা আর re-render হচ্ছে না।


    Note:

    আসলে আমাদের ছোট্ট একটা button component এর জন্য এটা করার দরকারই নেই,তাহলে cost কমাতে গিয়ে আমরা উলটো বাড়িয়ে দিবো।



    




*/