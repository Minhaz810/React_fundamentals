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







/* ---------------------------------------FUNCTIONAL COMPNENT--------------------------------- */

/* 



let Firstcomponent= function({locale}){  //খাতায় Diagram আঁকা
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



/* ---------------------------------------CLASS BASED COMPONENT--------------------------------- */

/* class Clock{
  print() {
    return (
      <h1 className='Heading'>
          <span className='text'>Rongon,{new Date().toLocaleTimeString()}</span>
    </h1>
    )
  }
}

const ClockComponent=new Clock(); */


// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// <React.StrictMode>
// {ClockComponent.print()}
// {/* <ClockComponent /> not valid */}
// </React.StrictMode>
// )

/* 
ফাংশনাল component এর নিজের কোনো state ছিলো না যেটা সে নিজে নিজেই maintain 
করবে,কিন্তু class based component এ এই ব্যাপারটা সম্ভব
 */


/* React.Component নিজে একটা class যার ভেতর render নামে method আছে */


/* 
class Clock extends React.Component{
  render (){
    return(
      <h1 className='Heading'>
          <span className='text'>Rongon,{new Date().toLocaleTimeString()}</span>
    </h1>
    )
  }
}

//এখন আর নতুন object create করা লাগবে না

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
  <Clock/>
</React.StrictMode>
)
 */


/* 
যদি কোনো props দিতে চাই,অর্থ্যাত Clock ক্লাসের ভেতর যেই Element আছে সেটার কোনো property set 
করতে চাই, তাহলে <Clock locale="bn-BD"/> বলে দিলেই হবে, এবং সেটাকে call করবো this keyword 
দিয়ে।

কারণ

=>যখনই Clock Object কে call করছি সে React.Component কে extend করছে।

=>React.Component নিজে একটা class,তার ভেতরে props নামে একটা attribute আছে।

=>props attribute এর ভেতর locale নামে একটা property আছে যার value "bn-BD"

=>React.Component নিজেই একটা object create করছে,তার এবং সেই object এর ভেতর 
  React.Component class এর সব property থাকবে। তাই specific property call করতে হলে 
  this.props.locale এভাবে call করতে হবে

<span className='text'>Rongon,{new Date().toLocaleTimeString(this.props.locale)}</span>

 */

/* 
//Example:
class Clock extends React.Component{
  render (){
    return(
      <h1 className='Heading'>
          <span className='text'>Rongon,{new Date().toLocaleTimeString(this.props.locale)}</span>
    </h1>
    )
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
  <Clock locale="bn-BD"/>
</React.StrictMode>
)
 */



/* component একটার ভেতর আরেকটা থাকতে পারে */

class Clock extends React.Component{
  render (){
    return(
      <h1 className='Heading'>
          <span className='text'>Hello-{this.props.children},{new Date().toLocaleTimeString(this.props.locale)}</span>
    </h1>
    )
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
  <Clock locale="bn-BD">
      test
  </Clock>
</React.StrictMode>
)
