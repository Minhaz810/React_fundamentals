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



