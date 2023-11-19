import { useReducer,useEffect } from "react";

const intialState={
    
    loading:true,
    error:'',
    post:{},
    
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'SUCCESS':
            return {
                loading:false,
                post:action.data,
                error:'',
                
                }
        case 'FAILURE':
            return {
                loading:false,
                post:{},
                error:action.error,
                
                
            }


    }
}


export default function GetPost2(){
    const [mystate,dispatch]=useReducer(reducer,intialState)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicde.com/photos/4')
        .then(response => response.json())
        .then((json) =>{
            dispatch({type:'SUCCESS',data:json})
        })
        .catch(()=>{
            dispatch({type:'FAILURE',error:"Error"})
        })
    },[])
    return(
        <div>
            <div>{mystate.loading?"Loading....":mystate.post.title}</div>
            {mystate.error?mystate.error:''}
        </div>
    )
}