import React from 'react'
class Counter extends React.Component {
    state={
        count:0,
    }
    increamentCount=()=>{
        this.setState((state)=>({
            count:state.count+1 
        })
        )
    }

  render() {
    const{children}=this.props  //props থেকে render নামে একটা function নিবে
    const {count}=this.state
    return (
      children(count,this.increamentCount)
    )
  }
}

export default Counter;

/* 
আমাদের App এ counter নামের component এর ভেতরে আরেকটা component আছে,যেটা মূলত একটা function.
সেই compnent টা counter এর children এর ভেতর আছে। 
<counter>
        {(count,increamentCount)=>
        <ClickCounter count={count} increamentCount={increamentCount}/> }
<counter/>

==>const{children}=this.props
children নামে function টা কে Destructure করে নিয়ে আসলাম

==>children(count,this.increamentCount)
  parameter দিয়ে childen কে call করে দিলাম।
*/