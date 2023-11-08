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
    const{render}=this.props  //props থেকে render নামে একটা function নিবে
    const {count}=this.state
    return (
      render(count,this.increamentCount)
    )
  }
}

export default Counter;