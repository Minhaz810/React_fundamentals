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

