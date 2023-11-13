
import ClickCounter from './components/clickCounter';
import Section from './components/section';
import Counter from './components/counter';
import React from 'react';
import themeContext from './components/context/themecontext';

export default class App extends React.Component{
      state={
        theme:'dark',
        changeTheme:()=>{
          this.setState((prevState)=>(
            {
              theme: prevState.theme==='dark'?'light':'dark'
            }
          ))
        }
      }
     
      render(){
        return (
          <>
            <div className='app'>
              
              {/* <User render={(isLoggedIn)=>(isLoggedIn?"Chowdhury":"guest")}/> */}
              <Counter>
                {(count,increamentCount)=>
                <ClickCounter count={count} increamentCount={increamentCount}/> }
              </Counter>

              
              <themeContext.Provider value={this.state}>
                <Section/>
              </themeContext.Provider>

            </div>
          </>
        )
      }
}

/*

==>ধরা যাক,আমরা APP এর একটা state কে component এর ভেতর use করতে চাচ্ছি।

==>state={
        theme:'dark'
      }
==> আমি চাচ্ছি theme টা চলে যাক hoverCounter এর কাছে।
    
    যদি আমরা props drilling এর মাধ্যেমে করি:

    1. Destructure করে theme কে নিয়ে আসলাম
      const {theme}=this.state 


    2. Section component এ theme কে দিয়ে দিলাম
      <Section theme={theme}/>


    3.Section সেটাকে Destructure করে Receive করলো।
      export default function Section({theme}){
      return(
          <div>
              <h1>
                  This is a section
              </h1>
              <Content/>

          </div>
      )


    4. যেহেতু HoverCounter সরাররি Section এর ভেতর নাই,তাই একে আমরা Contnent এর ভেতর props 
        আকারে দিয়ে দিলাম
        <Content theme={theme}/>
        এবার content এর একটা theme নামক props আছে যার value {theme} (অর্থ্যাৎ Dark)


    5. theme কে conent এর ভেতর Destructure করে নিয়ে এসে Hover Counter এ pass করলাম।
      export default function Content({theme}){
        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {(count,increamentCount)=>
                    <HoverCounter count={count} increamentCount={increamentCount} theme={theme}/> }
                </Counter>
            </div>
        )
      } 
    }
      
    6. Finally HoverCounter theme নামে props recieve করলো।

        const {count}=this.props
        const {increamentCount}=this.props
        const {theme}=this.props



*/
