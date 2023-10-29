import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const element=React.createElement('h1',null,'Hello,world!');
// or
// const element=<h1>Hello World</h1>
const name='Rongon'


// function greet(user){
//   if(user){
//     return <h1>Hello,{user}</h1>
//   }
//   return <h1>Hello,Stranger</h1>
// }
// const element2=<h1>{greet()}</h1>

// console.log(element2)
/*{
  type:'h1',
  props:{
    children:'Hello,World'
  }
}*/
// const index=0
// const element=(
//   <h1 className='Heading' tabIndex={index}>
//     Hello World
//   </h1>
// )

/*
behind the scene:
প্রত্যেকটা Element এক একটা object

element{
  type: 'h1',
  props:{
    className:'heading',
    tabIndex:0,
    children:'hello world'
  }
}
মাথায় রাখতে হবে যে আমি আসলে HTML লিখছি না
*/
const index=0
/* 
const element=(
  //     <h1 className='Heading' tabIndex={index}>
  //       <span className='text'>Rongon,{new Date().toLocaleTimeString()}</span>
  //       <img src=''></img> 
  //     </h1>
  //   );
 */

/* 
  element{
  type: 'h1',
  props:{
    className:'heading',
    tabIndex:0,
    children:[
        {

          type='span',
          props:{
            className='text,
            children='Hello World'
          }

        },

        {

          type='span',
          props:{
            src='',
          }

        }

    ]
  }
}
*/


//Values are Escaped in react (ensures that you can never inject anything that's not explicitly written in your application.)
//React এর element হচ্ছে সবচাইতে ছোট building block

//এবার আমরা browser DOM এ react এর element এ প্রিন্ট করতে চাই

// React Elements Are immutable

// const root=ReactDOM.createRoot(document.getElementById('root'))
// setInterval(()=>{
//   const element=(
//     <h1 className='Heading' tabIndex={index}>
//       <span className='text'>Rongon,{new Date().toLocaleTimeString()}</span>
//       {/* <img src=''></img> */}
//     </h1>
//   );
//   root.render(
//     <React.StrictMode>
//       {element}
//     </React.StrictMode>,
//   )
//   },1000)
//প্রত্যেকবার নতুন করে element টা create হবে।