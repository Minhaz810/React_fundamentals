import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// let index =0;
// const element=(
//       <h1 className='Heading' tabIndex={index}>
//         <span className='text'>Rongon,{new Date().toLocaleTimeString()}</span>
//         {/* <img src=''></img> */}
//       </h1>
//     );

/* আমাদের তৈরী করা element টা কোনো functional element না,এটা just dumb একটা element
যার কোনো functionality নাই। */

// এই ফাংশনাল element কেই আমি বলবো একটা component

/* 

let Firstcomponent= function({locale}){
    return(
    <h1 className='Heading'>
          <span className='text'>Rongon,{new Date().toLocaleTimeString(locale)}</span>
    </h1>
    )
}
//   root.render(
//     <React.StrictMode>
//       {element}
//     </React.StrictMode>,
//   )


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
  <Firstcomponent locale="bn-BD" />
</React.StrictMode>
)

//components receive properties from outside

 */
