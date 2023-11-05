import React from "react";

const scales={
    "c":"Celsius",
    "f":"Farenhite"
}
const TemperatureInput =function({scale,temperature_props,handleChange}){
   
    return (
        <div>
        <fieldset>
            <legend>Enter Temperature in {scales[scale]}</legend>
            <input type="text" value={temperature_props} onChange={(e)=>handleChange(e,scale)}/>{scales[scale]}
        </fieldset>
        
        </div>
    )
}
export default TemperatureInput


/* 

==>যেহেতু আমাদের temperature এর input টাকে celcius ও farenhite এর ক্ষেত্রে connect করতে হবে,তাই আমরা এখন temperature এবং 
handleChange function টাকে state এ না দিয়ে props আকারে receive করবো। যেই props টা আসবে calculator থেকে।

 তাই আমাদের 
     state={
        temperature: '' ,
    }
    handleChange=(e)=>{
        this.setState({
            temperature:e.target.value
        })
    }

    এগুলো দরকার নাই। কেটে দিলাম।
==> const {temperature}=this.state 
    এই লাইনেরও দরকার নাই যেহেতু এটাকে আমরা state হিসেবে receive করছি না।

    const {scale,temperature}=this.props


==> <input type="text" value={temperature} onChange={this.handleChange}/>
    handleChange যেহেতু না লিখে props আকারে recieve করছি,

    const {scale,temperature,handleChange}=this.props
    
    লিখলাম এবং,
    this.handleChange কেটে এভাবে লিখতে পারি।

    <input type="text" value={temperature} onChange={handleChange}/>

==>যেহেতু আমাদের এখানে কোনো state manage হচ্ছে না,তাই আমরা এটাকে class component হিসেবে না রেখে simply functional component
    আকারে রাখতে পারি।

==>const TemperatureInput =function({scale,temperature,handleChange}){
   
    return (
        <div>
        <fieldset>
            <legend>Enter Temperature in {scales[scale]}</legend>
            <input type="text" value={temperature} onChange={handleChange}/>
        </fieldset>
        
        </div>
    )
}
export default TemperatureInput


destructuring টা আমরা parameter এর ভেতরে করছি,অর্থ্যাৎ আমাদের fucntion কে parameter হিসেবে props পাঠিয়ে দিবো।


==>এরপর চলে যাবো calculator component এর ভিতরে। এবং state manage করবো।

*/