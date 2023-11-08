import React from "react"
export default class HoverCounter extends React.Component{
   


    render(){
        const {count}=this.props
        const {increamentCount}=this.props
    return (
    <div>
        <h1 onMouseOver={increamentCount}>
            Hovered {count} times
        </h1>
    </div>
    )
    }
}
