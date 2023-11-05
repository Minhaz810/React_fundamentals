import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperaturInput";
import {toCelcius,toFarenhite,convert} from "../lib/converter"
class Calculator extends React.Component{
    state ={temperature:0,
            scale:'c'}
    handleChange =(e,scale)=>{
        this.setState({
            temperature: e.target.value,
            scale:scale
        })
    }
    render(){
        const {temperature,scale}=this.state
        const celsius= scale==="f"?convert(temperature,toCelcius):temperature;
        const farenhite=scale==="c"?convert(temperature,toFarenhite):temperature;
        return (
            <div>
            <TemperatureInput scale="c" temperature_props={celsius} handleChange={this.handleChange}/>
            <TemperatureInput scale="f" temperature_props={farenhite} handleChange={this.handleChange}/>
            <h2>Comment:</h2>
            <BoilingVerdict celcius={parseFloat(temperature)}/>
            </div>
        )
    }
}
export default Calculator

/* 
    এখানে যেই problem টা হচ্ছে,সেটা হলো,temperature কে আমরা access নিতে পারছি না কারণ সেটা প্রত্যেকটা TemperatureInput
    component এর নিজস্ব state. খাতায় Details আঁকা আছে।
*/