import React from "react";

export default class MyComponent extends React.Component{
    state={
        count:0,
        date: new Date()
    }
    addClick=()=>{
        this.setState((PrevState)=>({
            count:PrevState.count+1
        }))
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
        const interval= setInterval(tick(),1000)
    }
    componentDidUpdate(){
        document.title=`clicked ${this.state.count} times`
    }
    tick=()=>{
        this.setState({
            date: new Date()
        })
    }
    render(){
        const {date,count} =this.state
        return(
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>{count}</p>
                <button type="button" onClick={this.addClick}>Click</button>
            </div>
        )
    }
}

