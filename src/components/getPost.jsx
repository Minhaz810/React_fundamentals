import { useState,useEffect } from "react";

export default function GetPost(){
    const [post,setPost]=useState({}) //post হিসেবে এখানে json object আসবে,তাই আগে blank object দিয়ে রেখেছি।
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos/4')
        .then(response => response.json())
        .then((json) =>{
            setLoading(false)
            setPost(json)
            setError('')
        })
        .catch(()=>{
            setLoading(false)
            setPost({})
            setError("There is a problem")
        })
    })
    return(
        <div>
            <div>{loading?"Loading....":post.title}</div>
            {/* <img src={post.url}/> */}
            {error?error:''}
           
        </div>
    )
}

//https://jsonplaceholder.typicode.com/photos/1