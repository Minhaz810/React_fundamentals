import React from "react";

class Todo extends React.Component{
    state={
        todo:'',
        warning:null
    }
    handleChange=(e)=>{
        this.setState({
            todo:e.target.value
        })
        this.setState({
            warning:(e.target.value).includes('.js')?"Do you know Javascript? Learn it first!":null
        })
    }
    render(){
        const {todo,warning}=this.state
        return(
            <div>
                <p>{todo}</p>
                <textarea value={todo} onChange={this.handleChange}></textarea>
                <hr />
                {warning}
            </div>
        )
    }
}
export default Todo