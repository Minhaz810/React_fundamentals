//component এর নাম capital letter দিয়ে লিখতে হবে must

/* যেহেতু React.Component ব্যাবহার করবো তাই React কে import করে নিতে হবে। */

import React from "react";

class Clock extends React.Component{
  state={
    seconds:Math.floor(((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) % (1000 * 60)) / 1000),
    minutes: Math.floor(((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60)),
    hours:Math.floor(((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    days: Math.floor((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) / (1000 * 60 * 60 * 24))
}
  
    /* constructor(props){  //by default props পেয়ে যায় আমাদের constructor
          super(props);  //props টা মুলত React.component এর constructor এ আছে,সেটাকে Clock এ inherit করেছি
          this.state={
            date: new Date()  //এই new Date() টা হচ্ছে একটা state যেটাকে আমার continuously Change করতে হবে।
          }
    } */
    /* state এর ভেতরে যদি props টাকে প্রয়োজন হয় তাহলে আমরা উপরের নিয়মে constructor বানাবো,
    এক্ষেত্রে যেহেতু use হচ্ছে না,তাই আমরা একটা শর্টকাট ব্যাবহার করতে পারি,
    state={date:new DAte()}; বাইরে লিখতে হবে।
    */

  

    /* setState নামে একটা function React আমাদেরকে দিয়ে দেয়,যদি আমরা Data কে change জরতে চাই। */

    /* প্রথমে DOM এ ঘড়িটা আসতে হবে,এরপর এটাকে চালু করতে হবে। */
    tick(){
      this.setState(
        {
          seconds:Math.floor(((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) % (1000 * 60)) / 1000),
          minutes: Math.floor(((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60)),
          hours:Math.floor(((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          days: Math.floor((new Date("Nov 30, 2023 00:00:00").getTime() -new Date().getTime()) / (1000 * 60 * 60 * 24))
      }
      );

    }
    // }
    componentDidMount(){
      this.Clocktimer=setInterval(()=>{
        this.tick()
      },1000)
    }
    componentWillUnmount(){
      clearInterval(this.Clocktimer);
    }

    render(){
      return (
        <h1 className='Heading'>
          Time Remaining: <span className='text'>{(this.state.days)}d {(this.state.hours)}h {(this.state.minutes)}m {(this.state.seconds)}s</span>
        </h1>
      );
    }
}


/* 
যেহেতু আমরা এই clock টাকে অন্য file এ ব্যাবহার করবো,তাই আমরা এটাকে Default export করবো। Named export করবো না,কারণ
আমদের এই file থেকে একটাই জিনিস export হবে 
*/
export default Clock;


/*
Using State Correctly:


=>Do Not Modify State Directly

    // Wrong
    this.state.comment = 'Hello';

    // Correct
    this.setState({comment: 'Hello'});



*/