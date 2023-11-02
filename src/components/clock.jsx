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
        this.state.locale=locale
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
        console.log('clock component rendered')
        const {date,locale}=this.state
        return (
        <div>
          <h1 className='Heading'>
            Clock : <span className='text'>{date.toLocaleTimeString(locale)}</span>
          </h1>
          <Button change={this.handleClick.bind} locale="bn-BD"/>
        </div> 
        );
      }
  }

export default Clock;



/*

আমরা চাই একটা button add করতে যেই button টা click করলে আমাদের clock এর props change হয়ে বাংলা থেকে english হয়ে যাবে

usually HTML file e আমরা জিনিসটাকে এভাবে লিখতাম

<button onlick="handleClick()">CLick Here</button>

<script>
  function handleClick(){
    console.log('Button Clicked')
  }
</script>

এখানে browser কিন্তু handleClick() কে string আকারে নিচ্ছে,button click করলে তখনই কেবল সে function আকারে call করছে।কারণ 
function আকারে call করলে page reload হওয়ার সাথে সাথেই function call হইয়ে যেতো।

এখন আমরা React component এর ভেতর button কে add করতে চাই।

==>সব element কে একটা element এ convert করতে হবে কারণ render কেবল একটা element ই return করে।

  wrong way:
            <h1 className='Heading'>
                Clock : <span className='text'>{date.toLocaleTimeString("en")}</span>
            </h1>
            <button>Click Here</button>
  right way:
            <div>
                <h1 className='Heading'>
                    Clock : <span className='text'>{date.toLocaleTimeString("en")}</span>
                </h1>
                <button>Click Here</button>
            </div>

==>
    wrong way:
        <button onclick="">Click Here</button>
    right way:
        camelcase এ onclick কে লিখতে হবে কারণ আমরা javascript লিখছি

        <button onClick="">Click Here</button>

==> 
    wrong way:
        <button onClick="handleClick()">Click Here</button>
    right way:
        <button onClick={this.handleClick}>Click Here</button>

==>
    wrong way:

        handleClick(){
        if(this.state.locale=="en-US"){
            this.setState(
                {
                    locale:"bn-BD"
                }
            )
        }else{
            this.setState(
                    {
                        locale:"en-US"
                    }
                )
            }
        }
      handleClick একটা callback function,সে this কে চেনে না। তাই সে বুঝবেই না কার state কে change করতে চাচ্ছি
    
      right way:
        
        arrowfunction use করা,কারণ arrow function this কে care ই করে না।

        handleClick=()=>{
        if(this.state.locale=="en-US"){
            this.setState(
                {
                    locale:"bn-BD"
                }
            )
        }else{
            this.setState(
                    {
                        locale:"en-US"
                    }
                )
            }
        }

==>
    paramenter binding:

    handleClick=(locale)=>{
        this.state.locale=locale
    }
    এবং
    <button onClick={()=>this.handleClick('en-US')}>Click Here</button>
    arrow function টা handleClick কে parameter pass করে দিয়ে return করে দেয়।
    or
    <button onClick={()=>this.handleClick.bind(this,'en-US')}>Click Here</button>

==>চাইলে আমরা আলাদা করে button component বানিয়ে সেটাকে clock component এ use করতে পারি।

    <Button /> এর ভেতর props আকারে আমরা কিছু পাঠাতেও পারি। 

    wrong way:
        <Button change={this.handleClick('en-US')}/>

        parameter সহ পাঠানো যাবে না,পাঠালে render এর সাথে সাথে function call হয়ে যবে,

    probable solution:
        এর আগে আমরা এভাবে bind করে জিনিসটাকে solve করতাম
        <Button change={this.handleClick.bind(this,'en-US')}/>




==>
*/