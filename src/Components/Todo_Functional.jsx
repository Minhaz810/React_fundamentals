import { useState } from "react"
function Todo_fucntional(){
    const [todo,setTodo] =useState({
        title:'',
        description:''
    })
    const {title,description}=todo
        return(
            <div>
                <p>{title}</p>
                <input value={title} onChange={(e)=>setTodo({
                    ...todo,
                    title:e.target.value
                })}></input>
                <hr />
                <p>{description}</p>
                <textarea value={description} onChange={(e)=>setTodo({
                    ...todo,
                    description:e.target.value
                })}></textarea>
                
            </div>
        )
    }
export default Todo_fucntional
/* 
==>Rules of Hooks
1. Hooks গুলোকে Top Level ছাড়া আর কোথাও use করা যাবে না।
2. আমরা চাইলে আমাদের বানানো কোনো function এ hook use করতে পারবো না চাইলেই।
3. Hooks কে সবসময় React এর কোনো কিছুতেই use করতে হবে।
4. Class component এর ক্ষেত্রে আমদের state গুলো টা একটা object এর ভেতরে ছিলো,তাই আমরা কোনো একটা 
    state কে চেইঞ্জ করলে পুরো object টা change না হয়ে জাস্ট particular state এর value change হয়ে
    merge হতো। কিন্তু hook এর ক্ষেত্রে state হিসেবে একটা value ই দিতে হবে,যদি আমি state এর value হিসেবে
    কোনো object দেই,তাহলে setState এর মাধ্যেমে আমরা object এর কোনো particular property 
    এর value change করতে পারবো না। যদি করতে চাই,তাহলে আগে spread Operator এর মাধ্যেমের আমাদেরকে 
    value টা নিয়ে আসতে হবে,then আমরা change করতে পারবো


*/