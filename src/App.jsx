import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ClickCounter from './components/clickCounter';
import Section from './components/section';
import Counter from './components/counter';



function App() {

  return (
    <>
      <div className='app'>
        
        {/* <User render={(isLoggedIn)=>(isLoggedIn?"Chowdhury":"guest")}/> */}
        <Counter>
        {(count,increamentCount)=>
        <ClickCounter count={count} increamentCount={increamentCount}/> }
        </Counter>

        
        <Section/>

      </div>
    </>
  )
}

export default App

/*

==> আমরা আগে user এর ভেতর props পাঠাচ্ছিলাম এইভাবে।
  <User name="Chowdhury"/>

==> এখন আমরা যেই কাজটা করবো props আকারে একটা fucntion পাঠাবো,কারণ যেহেতু আমরা 
  props আকারে object পাঠাই আর javascript এ function ও একটা object তাই চাইলে আমরা একটা 
  function কে props আকারে পাঠাতে পারি যেই function টা আমার নাম return করবে।

  <User name={()=>"Chowdhury"}/>

==>User.jsx এ চলে যাই

==>আমরা চাইলে function এ parameter ও পাঠাতে পারি।
  <User name={(isLoggedIn)=>(isLoggedIn?"Chowdhury":"guest")}/>

==>User.jsx এ চলে যাই

==>এবার আমাদের compomnent এর prop টার নাম যদি name না দিয়ে render দিয়ে দেই অর্থ্যাৎ
  <User render={(isLoggedIn)=>(isLoggedIn?"Chowdhury":"guest")}/>
  তাহলে এই prop টাকেই আমরা বলবো render prop.

  চাইলে এটার নাম অন্য কিছুও দিতে পারতাম,কিন্তু convensionally এটার নাম render prop দিয়ে থাকি আমরা

==>

<Counter render={(counter,increamentCount)=>
            <ClickCounter counter={counter} increamentCount={increamentCount}/> }
        />
এখানে counter componenent এর render নামক props টা হচ্ছে একটা function যেটা আসলে 
counter clickcounter component টাকে return করে,কিন্তু return করার সময় এর ভেতর
counter আর increament counter এর value দিয়ে দেয়।

*/