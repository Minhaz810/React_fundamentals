import React from "react";

class Form extends React.Component{
    state  ={
        title: '',
        text: 'Javascript is awesome',
        library:'Angular',
        isAwesome:true,
    }
    handleChange=(e)=>{
        if(e.target.type==="text"){
            this.setState({
                title:e.target.value
            })
        }else if(e.target.type==="textarea"){
            this.setState({
                text:e.target.value
            })
        }
        else if(e.target.type==="select-one"){
            this.setState({
                library:e.target.value
            })
        }
        else if(e.target.type==="checkbox"){
            this.setState({
                isAwesome:e.target.checked
            })
        }
        else{
            console.log("nothing")
        }
    }
    submitHandler=(e)=>{
        const {title,text,library,isAwesome}=this.state;
        e.preventDefault();  //এটা দিলে form টা HTML এর মতো reload(clear) হয়ে যাবে না। কিন্তু submit হবে
        console.log(title,text,library,isAwesome)
    }
    render(){
        const {title,text,library,isAwesome}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={null}/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Enter-title" value={title} onChange={this.handleChange}/>
                    <br />
                    <br />
                   <textarea name="text" value={text} onChange={this.handleChange}></textarea>
                   <br />
                   <br />
                   <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                   </select>
                   <br />
                   <br />
                   <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                   <label htmlFor="chekbox">JavaScript is Awesome?</label>
                   <br />
                   <br />
                   <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}


export default Form


/* 
    ধরা যাক আমরা একটা form print করতে চাই। এখন আমরা একটা form component বানালাম এবং সেখানে একটা form লিখলাম
    আমরা ব্রাউজারে গিয়ে দেখবো আমাদের ফর্ম কাজ করছে এবং আমরা সেখানে লিখতে পারছি। কিন্তু যদি আমরা 
    <input type="text" placeholder="Enter-title" value="JavaScript"/>
    লিখি, তখন দেখতে পারবো Form এর ভেতর javascript লিখা উঠে আছে এবং console এ দেখাচ্ছে,

    "You provided a `value` prop to a form field without an `onChange` handler. This will 
    render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either 
    `onChange` or `readOnly`."

    এটা কেনো?

    ==> আমরা যখন form লিখি,তখন html এর form নিজে নিজে একটা state maintain করে,কারণ,যদি আমরা 
        let form =document.queryselector(form) করে console.log(form.value) করি,এবং লিখি,তখন আমরা দেখবো
        প্রত্যেকটা input এর সাথে আগের input জোড়া লেগে লেগে console এ print হচ্ছে,তার মানে HTML form আগের state 
        টাকে মনে রাখছে

    ==>কিন্তু React এ লিখার সময় আমরা html লিখছি না,JSX লিখছি,কিন্তু আমরা form এর control কিন্তু React এর কাছে,আরো specifically 
        React.Component ,আরো specifically form component এর কাছে দেই নাই। তাই লিখতে পারছিলাম form এ। যেটা **uncontrolled 
        form**

    ==>কিন্তু যখনই <input type="text" placeholder="Enter-title" value="JavaScript"/>

        value দিয়ে দিবো,তখন control টা চলে যাবে React এর কাছে,আরো specifically Form component
        এর কাছে,তখন আমাদের state কে DOM maintain করবে না,বরং React maintain করবে। যেটা **controlled form**
        কিন্তু আমরা যদি শুধু value দিই তখন console এর এই warning "You provided a `value` prop to a form field 
        without an `onChange` handler.This will render a read-only field." দেখাবে,অর্থ্যাৎ আমাদের form টা read only 
        হিসেবে render হয়েছে।
        
    ==>তাই আমরা আগে state define করলাম
        state  ={
        title: 'Javascript'
    }
    এবং
        <input type="text" placeholder="Enter-title" value={this.state.title} onChange={this.handleChange}/>

    এভাবে লিখলাম এবং

    handleChange নামক fuction লিখলাম:
    
    handleChange=(e)=>{
       this.setState({
        title:e.target.value
       })
       console.log(e.target.value)
    }

    এখানে e হচ্ছে একটা event,onchange call করলে সেই event টা fire হয়।
    e.target.value হচ্ছে ,on change এ কি কি নিচ্ছে সেটা


==>এভাবে code করার ক্ষেত্রে একটু বেশি code করা লাগলেও benefit অনেক বেশি,কারণ একটা single জায়গা থেকে আমাদেরকে
    সব state manage করা লাগতেসে। যদি এমন হতো যে আমরা কিছু state react থেকে আর কিছু state dom থেকে control
    করছি তাহলে আমাদের larger project এ scalibility maintain করা যেতো না।


    -----------------------------------------Text Area --------------------------------------

==>চাইলে আমরা text area ও add করতে পারি।

    <textarea name="text" value="Javascript is awesome"></textarea>

    আবারো same সমস্যা হবে, value harcode করে দিয়েছি এবং onchange নাই।

==>state change করলাম
    state  ={
        title: '',
        text: 'Javascript is awesome'
    }
==>এভাবে লিখলাম
    <textarea name="text" value={text} onChange={this.handleChange}></textarea>

==>কিন্তু এখন যদি Text area তে লিখতে যাই,নতুন problem face করবো। দেখবো যে input field এ লিখা উঠছে,কারণ,

    handleChange=(e)=>{
       this.setState({
        title:e.target.value
       })
    }
    এখানে তো একটাই event দেয়া,সে আসলে কোনটা পাচ্ছে?
    তাই condition দিয়ে specify করে দিতে হবে।

    handleChange=(e)=>{
        if(e.target.type==="text"){
            this.setState({
                title:e.target.value
            })
        }else if(e.target.type==="textarea"){
            this.setState({
                text:e.target.value
            })
        }
        else{
            console.log("nothing")
        }
    }


     ----------------------------------------- Select --------------------------------------

==>
    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
    </select>

==>
    if(e.target.type==="text"){
            this.setState({
                title:e.target.value
            })
        }else if(e.target.type==="textarea"){
            this.setState({
                text:e.target.value
            })
        }
        else if(e.target.type==="select-one"){
            this.setState({
                library:e.target.value
            })
        }
        else{
            console.log("nothing")
        }
    }

    এখানে already selected option এর জন্য 

        <select selected ="React" value="React" onChange={this.handleChange}>

        এভাবে লিখা লাগবে না
    automatically React librabry এর default value কে select করে ফেলবে।


    -----------------------------------------CheckBox --------------------------------------

==> state  ={
        title: '',
        text: 'Javascript is awesome',
        library:'Angular',
        isAwesome:true,
    }

==> 
    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
    <label htmlFor="chekbox">JavaScript is Awesome?</label>

==> else if(e.target.type==="checkbox"){
            this.setState({
                isAwesome:e.target.checked
            })
        }

        
এগুলো সব হলো controlled form handling, তবে একটা particualr case এ আমাদের কে অবশ্যই Uncontrolled way তে form 
handle করত এহবে,সেটা হলো input type ="file",কারণ এটার কোনো state নাই।

==> যদি input এর value null দিয়ে দেই আমরা ভাবতে পারি এটা uncontrolled
    কিন্তু না,এটা controlled ই কিন্তু সেটা আবার editable হয়ে যাবে,তাই component 
    কে ক্লিয়ার রাখলে হলে empty string দিতে হবে।

Form handling এর জন্য React এর formik নামে Library আছে।
*/