import React from "react";
import Button from './button'
class Clock extends React.Component{
    state={
      date :new Date(),
      locale:"en-US"
    }
  
    tick(){
        this.setState(
            {
                date: new Date(),
            }
        );
  
      }
    handleClick=(locale)=>{
        this.setState({
          locale:locale
        })
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
        const {date,locale}=this.state
        
        let button;
        
        return (
        <div>
          <h1 className='Heading'>
            Clock : <span className='text'>{date.toLocaleTimeString(locale)}</span>
            
            
          </h1>
          
          {locale ==="bn-BD" ? 
                    button=(<Button change={this.handleClick} locale="en-US" show={false} enable={false}/>):
                          button=(<Button change={this.handleClick} locale="bn-BD" show enable />)}
          
        </div> 
        );
      }
  }

export default Clock;


/* 
  আমরা চাইলে if else condition দিয়ে render করতে পারি,সেক্ষেত্রে লক্ষ্য রাখতে হবে যে,

  ==>যেহেতু Javascript লিখছি,সেহেতু আমরা {} এর ভেতরে লিখবো। কিন্তু 
  if(condition){
  <Button change={
                this.handleClick
                } locale="bn-BD"/>
  }

  এভাবে লিখলে কাজ করবে না। কারণ {} এর meaning হচ্ছে '{' মানে শুরু, '}' মানে শেষ,এর মাঝখানে {} থাকা যাবে না,যেটা আমাদের
  কোডে আছে। 

  ==> যেহেতু JSX এর ভেতর সবই javascript element,সেহেতু <Button change={this.handleClick.bind} locale="bn-BD"/> ও একটা 
  element,চাইলে ওকে আমরা নিয়ে reneder এর বাইরে নিয়ে যেতে পারি,তাহলে সে usual javascript expression, তখন আর আমাদের 
  {} এর ভেতর লিখা লাগবে না।

  ==>   
  
        if(locale=="en-US"){
            button=(<Button change={this.handleClick} locale="bn-BD"/>)
        }else{
            button=(<Button change={this.handleClick} locale="en-US"/>)
        }

        চাইলে এই condition টাকে আমরা ternary operator এর মাধ্যমেও লিখতে পারি।

        {locale ==="en-US" ? 
                    button=(<Button change={this.handleClick} locale="bn-BD"/>):
                          button=(<Button change={this.handleClick} locale="en-US"/>)}
*/



