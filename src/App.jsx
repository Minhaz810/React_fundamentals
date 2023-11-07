import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Text from './components/composition/Text'
import Emoji from './components/composition/Emoji'
import Bracket from './components/composition/Bracket'  //যদিও আমাদের component না Emoji নামে আছে,তবুও যেহেতু Export Default করছে,তাই যাই Import করি না কেনো Bracket নামে Imported হচ্ছে



function App() {
  

  return (
    <>
      <h1>
        <Emoji>
          {({addEmoji})=> /* emoji থেকে Destructure করে addEmoji নিলাম */
            <Bracket>
              {({addBracket})=> /* Bracket থেকে Destructure করে addBracket নিলাম */
              <Text addEmoji={addEmoji} addBracket={addBracket}/>
              }
            </Bracket>
          }
        </Emoji>
        </h1> 
    </>
  )
}

export default App

/* 
আমি যদি আমার Emoji কে সরিয়েও ফেলি,তাহলেও আমাদের Text কাজ করবে। Tightly coupled ব্যাপারটা থাকবে না।
*/